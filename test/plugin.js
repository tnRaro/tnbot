"use strict";

const assert = require("assert");

const plugin = require("../dest/plugin");

const echo = require("../plugins/echo");

describe("plugin", () => {
	it("#register", () => {
		plugin.register(echo);
	});
	it("#exist", () => {
		assert.equal(true, plugin.exist("echo"));
	});
	it("#get", () => {
		assert.deepEqual(echo, plugin.get("echo"));
	});
	it("#get.alias", () => {
		assert.deepEqual(echo, plugin.get("메아리"));
		assert.deepEqual(echo, plugin.get("반사"));
	});
	it("#deregister", () => {
		plugin.deregister("echo");
	});
});
