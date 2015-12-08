"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.input = input;
exports.addPluginDirectory = addPluginDirectory;
exports.removePluginDirectory = removePluginDirectory;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _glob = require("glob");

var _glob2 = _interopRequireDefault(_glob);

var _plugin = require("./plugin");

var plugin = _interopRequireWildcard(_plugin);

var _command = require("./command");

var command = _interopRequireWildcard(_command);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function input(cmd, profile) {
	return command.call(cmd, profile);
}

function addPluginDirectory(dirname) {
	(0, _glob2.default)(_path2.default.resolve(dirname, "./*.js"), function (err, cmds) {
		// TODO: exception
		cmds.forEach(function (cmd) {
			plugin.register(require(cmd));
		});
	});
}

function removePluginDirectory(dirname) {
	(0, _glob2.default)(_path2.default.resolve(dirname, "./*.js"), function (err, cmds) {
		// TODO: exception
		cmds.forEach(function (cmd) {
			plugin.deregister();
		});
	});
}

addPluginDirectory("plugins/");