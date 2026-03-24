"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var design_system_1 = require("@stellar/design-system");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var GuessTheNumber_1 = require("../components/GuessTheNumber");
var MilestoneTracker_1 = require("../components/MilestoneTracker");
var util_1 = require("../contracts/util");
var Home_module_css_1 = require("./Home.module.css");
var mockMilestones = [
    { id: 1, label: "Complete Lesson 1", lrnReward: 10 },
    { id: 2, label: "Pass Quiz 1", lrnReward: 20 },
    { id: 3, label: "Build your first contract", lrnReward: 50 },
];
var Home = function () { return (<div className={Home_module_css_1.default.Home}>
		<div>
			<h1>Yay! You&apos;re on Stellar!</h1>

			<p>
				A local development template designed to help you build dApps on the
				Stellar network. This environment lets you easily test wallet
				connections, smart contract interactions, transaction verifications,
				etc.{" "}
				<react_router_dom_1.Link to="https://scaffoldstellar.org/docs/intro" className="Link Link--primary" target="_blank">
					View docs
				</react_router_dom_1.Link>
			</p>
		</div>

		<design_system_1.Card>
			<h2>
				<design_system_1.Icon.Trophy01 size="lg"/>
				Course Progress (Testing Issue 55)
			</h2>
			<p>
				Track your learning journey and earn LRN rewards by completing on-chain
				milestones.
			</p>
			<MilestoneTracker_1.MilestoneTracker courseId="stellar-basics" milestones={mockMilestones}/>
		</design_system_1.Card>

		<design_system_1.Card>
			<h2>
				<design_system_1.Icon.File06 size="lg"/>
				Sample Contracts
			</h2>

			<p>
				<strong>Guess The Number:</strong> Interact with the sample contract
				from the{" "}
				<react_router_dom_1.Link to="https://scaffoldstellar.org/docs/tutorial/overview" className="Link Link--primary" target="_blank">
					Scaffold Tutorial
				</react_router_dom_1.Link>{" "}
				using an automatically generated contract client.
			</p>

			<GuessTheNumber_1.GuessTheNumber />

			<p>Or take a look at other sample contracts to get you started:</p>

			<nav>
				<react_router_dom_1.Link to="https://github.com/OpenZeppelin/stellar-contracts/tree/main/examples">
					<design_system_1.Button variant="tertiary" size="md">
						OpenZeppelin sample contracts
						<design_system_1.Icon.ArrowUpRight size="md"/>
					</design_system_1.Button>
				</react_router_dom_1.Link>
				<react_router_dom_1.Link to="https://github.com/stellar/soroban-examples">
					<design_system_1.Button variant="tertiary" size="md">
						Soroban sample contracts
						<design_system_1.Icon.ArrowUpRight size="md"/>
					</design_system_1.Button>
				</react_router_dom_1.Link>
			</nav>
		</design_system_1.Card>

		<design_system_1.Card>
			<h2>
				<design_system_1.Icon.Code02 size="lg"/>
				Start Building
			</h2>

			<ol>
				<li>
					Add your contract under <code>/src/contracts</code>
				</li>
				<li>
					Contracts are built by Scaffold when you run <code>npm start</code>
				</li>
				<li>
					Changes are rebuilt automatically by <code>Vite</code>
				</li>
				<li>
					Interact with your contract immediately in the Contract Explorer
				</li>
			</ol>

			<p>
				Watch the full process in our{" "}
				<react_router_dom_1.Link to="https://www.youtube.com/watch?v=86hWe8Ragtg&list=PLmr3tp_7-7Gjj6gn5-bBn-QTMyaWzwOU5&index=1" className="Link Link--primary">
					Youtube tutorial
				</react_router_dom_1.Link>
				<br />
				Get inspired by our showcase of{" "}
				<react_router_dom_1.Link to="https://scaffoldstellar.org/showcase" className="Link Link--primary">
					Example frontends
				</react_router_dom_1.Link>
				<br />
				Ready to deploy?{" "}
				<react_router_dom_1.Link to="https://developers.stellar.org/docs/tools/cli/install-cli" className="Link Link--primary">
					Read the mainnet deployment guide
				</react_router_dom_1.Link>
			</p>
			<p></p>
		</design_system_1.Card>

		<section>
			<design_system_1.Card>
				<design_system_1.Icon.Code02 size="lg"/>
				<p>
					Invoke your smart contract using the
					<react_router_dom_1.Link to="/debug" className="Link Link--primary">
						Contract Explorer
					</react_router_dom_1.Link>
				</p>
			</design_system_1.Card>

			<design_system_1.Card>
				<design_system_1.Icon.SearchLg size="lg"/>
				<p>
					Browse your local transactions with the
					<react_router_dom_1.Link to={(0, util_1.labPrefix)()} className="Link Link--primary">
						Transaction Explorer
					</react_router_dom_1.Link>
				</p>
			</design_system_1.Card>
		</section>
	</div>); };
exports.default = Home;
