console.log('twoSumFast:');

// Input Start
var Generator = require('../../../generator/index');
var input = Generator.getEscRandomNumbers(1E4, -10, 10);
input = Generator.noRepeat(input);
// Input End

console.log('Input: ' + input);

// TwoSumFast Function
function twoSumFast() {
	var counter = 0;
	for(var i = 0, len < input.length; i < len - 1; i++) {
		var searchkey = -1 * input[i];
		if(rank(input, searchKey) >  -1 && input[i] < 0) {
			counter++;
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
console.log('> Output: ' + twoSumFast(input));
// Output End