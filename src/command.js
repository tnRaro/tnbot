import * as plugin from "./plugin";
import parser from "./parser";

import project from "../package.json";

let originalApi = {
	bot: {
		name: project.name,
		version: project.version,
		description: project.description,
		author: project.author
	}
};

export function call(command, profile){
	// TODO: exception command is null
	const cmd = parser(command);

	let p = plugin.get(cmd.name);
	if(p){
		// TODO: exception profile is null
		if((profile && profile.permission || 0) >= p.permission){
			return new Promise((fulfill, reject) => {
				let api = {};

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
		return Promise.reject(`${cmd.name}: command not found`);
	}
}
