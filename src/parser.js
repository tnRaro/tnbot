import tokenizer from "./tokenizer";

const re = /^(-.|--.+)$/;

export default function(x){
	let tokens = tokenizer(x);

	let switchs = [];
	let args = [];

	for(let token of tokens){
		let s = token.match(re);
		if(s){
			switchs.push(s[1].replace(/--?/, ""));
		} else {
			args.push(token);
		}
	}

	return {
		input: x,
		length: args.length,
		name: args[0],
		args: args.slice(1),
		switchs
	};
}
