"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavBar;
var design_system_1 = require("@stellar/design-system");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var App_module_css_1 = require("../App.module.css");
var WalletButton_1 = require("./WalletButton");
function NavBar() {
    var _a = (0, react_1.useState)(false), menuOpen = _a[0], setMenuOpen = _a[1];
    var navLinks = [
        { to: "/learn", label: "Learn" },
        { to: "/dao", label: "DAO" },
        { to: "/leaderboard", label: "Leaderboard" },
        { to: "/profile", label: "My Profile" },
    ];
    return (<header className={App_module_css_1.default.NavBar}>
			<div className={App_module_css_1.default.NavBarContent}>
				<react_router_dom_1.NavLink to="/" className={App_module_css_1.default.Logo}>
					<design_system_1.Text as="div" size="lg" weight="bold">
						LearnVault
					</design_system_1.Text>
				</react_router_dom_1.NavLink>

				<nav className={"".concat(App_module_css_1.default.NavLinks, " ").concat(menuOpen ? App_module_css_1.default.NavLinksOpen : "")}>
					{navLinks.map(function (_a) {
            var to = _a.to, label = _a.label;
            return (<react_router_dom_1.NavLink key={to} to={to} onClick={function () { return setMenuOpen(false); }}>
							{function (_a) {
                    var isActive = _a.isActive;
                    return (<design_system_1.Button variant={isActive ? "primary" : "tertiary"} size="md" disabled={isActive}>
									{label}
								</design_system_1.Button>);
                }}
						</react_router_dom_1.NavLink>);
        })}
				</nav>

				<div className={App_module_css_1.default.NavRight}>
					<WalletButton_1.WalletButton />
					<design_system_1.Button variant="tertiary" size="md" onClick={function () { return setMenuOpen(!menuOpen); }} className={App_module_css_1.default.Hamburger}>
						{menuOpen ? <design_system_1.Icon.X /> : <design_system_1.Icon.Menu01 />}
					</design_system_1.Button>
				</div>
			</div>
		</header>);
}
