module.exports = {
	binaryheadChecker: function(output) {
		var k = 1, N = output.length - 1;
		while(2 * k < N) {
			var a = 2 * k;
			var b = a + 1;
			var pass output[a] != undefined && output[b] !== undefined;
			if(!pass || Math.max(output[a], output[b]) > output[k]) return 'not pass';
			k = a;
		}
		return pass;
	}
};