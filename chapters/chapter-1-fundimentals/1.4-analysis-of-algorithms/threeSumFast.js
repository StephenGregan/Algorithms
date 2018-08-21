console.log('threeSumFast:');

// Input Start
var Generator = require('../../../generator/index');
// input End
console.log('> Input: ' + input);

// ThreeSumFast
function threeSumFast(input) {
	var counter = 0;
	for(var i = 0, len = input.length; i < len - 2; i++) {
		for(var j = i + 1; j < len - 1; j++) {
			var searchKey = - 1 * (input[i] + input[j]);
			var key = rank(input, searchKey)
			if(key > -1 && key > i && key > j) {
				counter++;
			}
		}
	}
	return counter;

	function rank(a, k) {
		var start = 0;
		var end = a.length - 1;
		while(start <= end) {
			var mid = Math.floor((end - start) / 2) + start;
			if(k < a[mid]) {
				end = mid - 1;
			}else if(k > a[mid]) {
				start = mid + 1;
			}else {
				return mid;
			}
		}
		return -1;
	}
}

// Output Start
console.log('Output: ' + threeSumFast(input));
// Output End