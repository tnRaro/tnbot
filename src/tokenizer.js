const re = /("[^"]+"|(\\\s|\S)+)/g;

export default function(x){
	let tokens = x.match(re).map(token => {
		return token
			.replace(/\\ /g, " ")
			.replace(/^\"|\"$/g, "");
	});

	return tokens;
}
