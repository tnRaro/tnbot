"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.input = input;

var _glob = require("glob");

var _glob2 = _interopRequireDefault(_glob);

var _plugin = require("./plugin");

var plugin = _interopRequireWildcard(_plugin);

var _command = require("./command");

var _command2 = _interopRequireDefault(_command);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: temporary
(0, _glob2.default)("plugins/*.js", function (err, cmds) {
	cmds.forEach(function (cmd) {
		plugin.register(require("../" + cmd));
	});
});

function input(cmd) {
	return _command2.default.call(cmd);
}