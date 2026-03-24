"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var design_system_1 = require("@stellar/design-system");
var contract_explorer_1 = require("@theahaco/contract-explorer");
var util_1 = require("../contracts/util");
var useWallet_1 = require("../hooks/useWallet");
// Import contract clients and load them for the Contract Explorer
var contractModules = import.meta.glob("../contracts/*.ts");
var contracts = await (0, contract_explorer_1.loadContracts)(contractModules);
var Debugger = function () {
    var _a = (0, useWallet_1.useWallet)(), address = _a.address, signTransaction = _a.signTransaction;
    return (<design_system_1.Layout.Content>
			<design_system_1.Layout.Inset>
				<h2>Debug Contracts</h2>

				<contract_explorer_1.ContractExplorer contracts={contracts} network={util_1.network} address={address} signTransaction={signTransaction}/>
			</design_system_1.Layout.Inset>
		</design_system_1.Layout.Content>);
};
exports.default = Debugger;
