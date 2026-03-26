import { type Request, type Response } from "express"

import { milestoneStore } from "../db/milestone-store"

type ApiMilestoneStatus = "pending" | "verified" | "rejected"
type InternalMilestoneStatus = "pending" | "approved" | "rejected"

function mapInternalStatus(status: InternalMilestoneStatus): ApiMilestoneStatus {
	if (status === "approved") return "verified"
	return status
}

function mapQueryStatus(
	status: string | undefined,
): InternalMilestoneStatus | undefined {
	if (!status) return undefined

	if (status === "verified") return "approved"
	if (status === "approved") return "approved"
	if (status === "pending") return "pending"
	if (status === "rejected") return "rejected"

	return undefined
}

function toIsoDateTime(value: unknown): string | null {
	if (!value) return null
	if (value instanceof Date) return value.toISOString()
	if (typeof value === "string") {
		const asDate = new Date(value)
		return Number.isNaN(asDate.getTime()) ? value : asDate.toISOString()
	}
	return String(value)
}

export async function getScholarMilestones(
	req: Request,
	res: Response,
): Promise<void> {
	const address = req.params.address
	const courseId = typeof req.query.course_id === "string" ? req.query.course_id : undefined
	const internalStatus = mapQueryStatus(
		typeof req.query.status === "string" ? req.query.status : undefined,
	)

	try {
		const reports = await milestoneStore.getReportsForScholar(address, {
			courseId,
			status: internalStatus,
		})

		const milestones = await Promise.all(
			reports.map(async (report) => {
				const auditLog = await milestoneStore.getAuditForReport(report.id)
				const lastDecision = auditLog.at(-1)

				const evidenceUrl =
					report.evidence_github ??
					(report.evidence_ipfs_cid
						? `ipfs://${report.evidence_ipfs_cid}`
						: null)

				return {
					id: String(report.id),
					course_id: report.course_id,
					milestone_id: report.milestone_id,
					status: mapInternalStatus(report.status),
					evidence_url: evidenceUrl,
					submitted_at: toIsoDateTime(report.submitted_at),
					verified_at: lastDecision ? toIsoDateTime(lastDecision.decided_at) : null,
					tx_hash: lastDecision?.contract_tx_hash ?? null,
				}
			}),
		)

		res.status(200).json({ milestones })
	} catch (err) {
		console.error("[scholars] getScholarMilestones error:", err)
		res.status(500).json({ error: "Failed to fetch scholar milestones" })
	}
}

