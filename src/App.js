"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var App_module_css_1 = require("./App.module.css");
var Footer_1 = require("./components/Footer");
var NavBar_1 = require("./components/NavBar");
var Dao_1 = require("./pages/Dao");
var Debug_1 = require("./pages/Debug");
var Home_1 = require("./pages/Home");
var Leaderboard_1 = require("./pages/Leaderboard");
var Learn_1 = require("./pages/Learn");
var Profile_1 = require("./pages/Profile");
function App() {
    return (<react_router_dom_1.Routes>
			<react_router_dom_1.Route element={<AppLayout />}>
				<react_router_dom_1.Route path="/" element={<Home_1.default />}/>
				<react_router_dom_1.Route path="/learn" element={<Learn_1.default />}/>
				<react_router_dom_1.Route path="/dao" element={<Dao_1.default />}/>
				<react_router_dom_1.Route path="/leaderboard" element={<Leaderboard_1.default />}/>
				<react_router_dom_1.Route path="/profile" element={<Profile_1.default />}/>
				<react_router_dom_1.Route path="/debug" element={<Debug_1.default />}/>
				<react_router_dom_1.Route path="/debug/:contractName" element={<Debug_1.default />}/>
			</react_router_dom_1.Route>
		</react_router_dom_1.Routes>);
}
var AppLayout = function () { return (<div className={App_module_css_1.default.AppLayout}>
		<NavBar_1.default />
		<main>
			<div style={{ padding: "2rem" }}>
				<react_router_dom_1.Outlet />
			</div>
		</main>
		<Footer_1.default />
	</div>); };
exports.default = App;
