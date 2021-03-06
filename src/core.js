import path from "path";
import glob from "glob";

import * as plugin from "./plugin";
import * as command from "./command";

export function input(cmd, profile){
	return command.call(cmd, profile);
}

export function addPluginDirectory(dirname){
	glob(path.resolve(dirname, "./*.js"), (err, cmds) => {
		// TODO: exception
		cmds.forEach((cmd) => {
			plugin.register(require(cmd));
		});
	});
}

export function removePluginDirectory(dirname){
	glob(path.resolve(dirname, "./*.js"), (err, cmds) => {
		// TODO: exception
		cmds.forEach((cmd) => {
			plugin.deregister();
		});
	});
}

addPluginDirectory(__dirname+"/../plugins/");
