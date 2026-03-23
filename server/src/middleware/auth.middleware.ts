import type { NextFunction, Request, Response } from "express";

import type { JwtService } from "../services/jwt.service";

export function createRequireAuth(jwtService: JwtService) {
  return function requireAuth(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const token = header.slice("Bearer ".length).trim();
    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    try {
      const { sub } = jwtService.verifyWalletToken(token);
      req.walletAddress = sub;
      next();
    } catch {
      res.status(401).json({ error: "Invalid or expired token" });
    }
  };
}
