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
			try{
				assert.equal("53", res);
			}catch(e){
				done(e);
			}

			done();
		}, err => {
			done(err);
		});
	});
	it("#call.exception command not found", (done) => {
		command.call("53")
		.then(res => {
			done(res);
		}, err => {
			try{
				assert.equal("53: command not found", err);
			} catch(e){
				done(e);
			}

			done();
		});
	});
	it("#call.exception No permission", (done) => {
		command.call("echo", {
			permission: -1
		})
		.then(res => {
			done(res);
		}, err => {
			try{
				assert.equal("No permission", err);
			} catch(e){
				done(e);
			}

			done();
		});
	});
});
