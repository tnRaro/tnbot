"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (x) {
	var tokens = x.match(re).map(function (token) {
		return token.replace(/\\ /g, " ").replace(/^\"|\"$/g, "");
	});

	return tokens;
};

var re = /("[^"]+"|(\\\s|\S)+)/g;