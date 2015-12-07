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
			try{
				assert.equal("53", res);
			} catch(e) {
				done(e);
			}

			done();
		}, err => {
			done(err);
		});
	});
});
