"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.call = call;

var _plugin = require("./plugin");

var plugin = _interopRequireWildcard(_plugin);

var _parser = require("./parser");

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var originalApi = {
	bot: {
		name: "tnbot",
		version: "0.0.1"
	}
};

function call(command, profile) {
	// TODO: exception command is null
	var cmd = (0, _parser2.default)(command);

	var p = plugin.get(cmd.name);
	if (p) {
		// TODO: exception profile is null
		if ((profile && profile.permission || 0) >= p.permission) {
			return new Promise(function (fulfill, reject) {
				var api = {};

				Object.assign(api, originalApi, {
					emit: fulfill,
					error: reject,
					command: Object.assign({}, cmd),
					profile: Object.assign({}, profile)
				});

				p.onCall(api, cmd.args, cmd.switchs);
			});
		} else {
			return Promise.reject("No permission");
		}
	} else {
		return Promise.reject(cmd.name + ": command not found");
	}
}