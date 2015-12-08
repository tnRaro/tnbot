let list = {};
let alias = {};

const propMap = {
	name: "string",
	permission: "number",
	onCreate: "function",
	onDestroy: "function",
	onCall: "function"
};

function check(plugin){
	if(plugin){
		let b = true;

		for(let key in propMap){
			let type = propMap[key];

			if(!plugin.hasOwnProperty(key) || typeof plugin[key] !== type){
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

export function register(plugin){
	if(check(plugin)){
		list[plugin.name] = Object.assign({}, plugin);

		if(plugin.alias){
			Array.from(plugin.alias).forEach(a => {
				alias[a] = plugin.name;
			});
		}

		plugin.onCreate();
	} else {
		throw "not enough properties,";
	}
}

export function exist(name){
	return list.hasOwnProperty(name);
}

export function get(name){
	// TODO: exception
	return list[name] || list[alias[name]];
}


export function deregister(name){
	if(list[name]){
		// TODO: exception
		list[name].onDestroy();

		if(list[name].alias){
			Array.from(list[name].alias).forEach(a => {
				delete alias[a];
			});
		}

		delete list[name];
	} else {
		throw "";
	}
}
