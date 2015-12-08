"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.register = register;
exports.exist = exist;
exports.get = get;
exports.deregister = deregister;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var list = {};
var alias = {};

var propMap = {
	name: "string",
	permission: "number",
	onCreate: "function",
	onDestroy: "function",
	onCall: "function"
};

function check(plugin) {
	if (plugin) {
		var b = true;

		for (var key in propMap) {
			var type = propMap[key];

			if (!plugin.hasOwnProperty(key) || _typeof(plugin[key]) !== type) {
				b = false;
				break;
			}
		}
		return b;
	} else {
		return false;
	}
}

// exports

function register(plugin) {
	if (check(plugin)) {
		list[plugin.name] = Object.assign({}, plugin);

		if (plugin.alias) {
			Array.from(plugin.alias).forEach(function (a) {
				alias[a] = plugin.name;
			});
		}

		plugin.onCreate();
	} else {
		throw "not enough properties,";
	}
}

function exist(name) {
	return list.hasOwnProperty(name);
}

function get(name) {
	// TODO: exception
	return list[name] || list[alias[name]];
}

function deregister(name) {
	if (list[name]) {
		// TODO: exception
		list[name].onDestroy();

		if (list[name].alias) {
			Array.from(list[name].alias).forEach(function (a) {
				delete alias[a];
			});
		}

		delete list[name];
	} else {
		throw "";
	}
}