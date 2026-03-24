"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
var design_system_1 = require("@stellar/design-system");
function Footer() {
    return (<footer style={{
            borderTop: "1px solid var(--sds-clr-gray-06)",
            padding: "1rem 3rem",
            textAlign: "center",
        }}>
			<div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
				<a href="https://github.com/bakeronchain/learnvault" target="_blank" rel="noopener noreferrer">
					<design_system_1.Text as="span" size="sm">
						GitHub
					</design_system_1.Text>
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<design_system_1.Text as="span" size="sm">
						Discord
					</design_system_1.Text>
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<design_system_1.Text as="span" size="sm">
						Twitter
					</design_system_1.Text>
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<design_system_1.Text as="span" size="sm">
						Docs
					</design_system_1.Text>
				</a>
			</div>
		</footer>);
}
