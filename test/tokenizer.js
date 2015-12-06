"use strict";

const assert = require("assert");

const tokenizer = require("../dest/tokenizer");

describe("tokenizer", () => {
	it("space split", () => {
		assert.deepEqual(["foo", "bar"], tokenizer.default("foo bar"));
		assert.deepEqual(["a", "b", "c"], tokenizer.default("a b c"));
	});
	it("\\space support", () => {
		assert.deepEqual(["foo bar"], tokenizer.default("foo\\ bar"));
	});
	it("qoute support", () => {
		assert.deepEqual(["foo bar"], tokenizer.default("\"foo bar\""));
	});
});
