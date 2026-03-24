"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Profile;
var design_system_1 = require("@stellar/design-system");
function Profile() {
    return (<div>
			<design_system_1.Text as="h1" size="lg">
				My Profile
			</design_system_1.Text>
			<design_system_1.Text as="p" size="md">
				This is the My Profile page.
			</design_system_1.Text>
		</div>);
}
