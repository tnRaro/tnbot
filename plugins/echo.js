module.exports = {
	name: "echo",
	alias: ["메아리", "반사"],
	version: "0.0.1",
	author: "admin@tnraro.com",
	permission: 0,
	onCreate(){
		// register
	},
	onDestroy(){
		// deregister
	},
	onCall(api, args, switchs){
		api.emit(args.join(" "));
	}
};
