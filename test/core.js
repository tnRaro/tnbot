const assert = require("assert");

const core = require("../dest/core");

describe("core", () => {
	it("#removePluginDirectory", () => {
		core.removePluginDirectory("plugins");
	});
	it("#addPluginDirectory", () => {
		core.addPluginDirectory("plugins");
	});
	it("#input", (done) => {
		core.input("echo 53")
		.then(res => {
			assert.equal("53", res);
			
			done();
		}, err => {
			done(err);
		});
	});
});
