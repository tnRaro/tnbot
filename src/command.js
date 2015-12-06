import * as plugin from "./plugin";
import parser from "./parser";

let originalApi = {
	bot: {
		name: "tnbot",
		version: "0.0.1"
	}
};

export function call(command){
	// TODO: exception command
	const cmd = parser(command);

	let p = plugin.get(cmd.name);

	if(p){
		return new Promise((fulfill, reject) => {
			let api = {};

			Object.assign(api, originalApi, {
				emit: fulfill,
				error: reject,
				command: Object.assign({}, cmd)
			});

			p.onCall(api, cmd.args, cmd.switchs);
		});
	} else {
		return Promise.reject(`${cmd.name}: command not found`);
	}
}
