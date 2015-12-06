"use strict";

const assert = require("assert");

const parser = require("../dest/parser");

describe("parser", () => {
	it("default", () => {
		assert.deepEqual({
			input: "foo bar",
			length: 2,
			name: "foo",
			args: ["bar"],
			switchs: []
		}, parser.default("foo bar"));
		assert.deepEqual({
			input: "a b c",
			length: 3,
			name: "a",
			args: ["b", "c"],
			switchs: []
		}, parser.default("a b c"));
	});
	it("properties", () => {
		const echo = parser.default("echo -e hello");

		assert.equal("echo -e hello", echo.input);
		assert.equal(2, echo.length);
		assert.equal("echo", echo.name);
		assert.deepEqual(["hello"], echo.args);
		assert.deepEqual(["e"], echo.switchs);
	});
});
