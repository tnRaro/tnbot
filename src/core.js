import glob from "glob";

import * as plugin from "./plugin";
import command from "./command";

// TODO: temporary
glob("plugins/*.js", (err, cmds) => {
	cmds.forEach((cmd) => {
		plugin.register(require(`../${cmd}`));
	});
});

export function input(cmd){
	return command.call(cmd);
}
