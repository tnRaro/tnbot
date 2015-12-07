"use strict";

const assert = require("assert");

const plugin = require("../dest/plugin");
const command = require("../dest/command");

const echo = require("../plugins/echo");

plugin.register(echo);

describe("command", () => {
	it("#call", (done) => {
		command.call("echo 53", {
			permission: 0
		})
		.then(res => {
			assert.equal("53", res);

			done();
		}, err => {
			done(err);
		});
	});
	it("#call.exception command not found", (done) => {
		command.call("53")
		.then(res => {

		}, err => {
			assert.equal("53: command not found", err);

			done();
		});
	});
	it("#call.exception No permission", (done) => {
		command.call("echo", {
			permission: -1
		})
		.then(res => {
			
		}, err => {
			assert.equal("No permission", err);

			done();
		});
	});
});
