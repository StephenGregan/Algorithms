console.log('mergeRecursiveBottom2Top:');

// Input Start
var input = require('../../../generator/index').getRandomNumbers();
// Input End

console.log('> Input: ' + input);

// MergeRecursiveBottom2Top Function
function mergeRecursiveBottom2Top(input) {
	return sort(input, 0, input.length - 1);
	function sort(arr) {
		for(var sz = 1, len = arr.length; sz < len; sz 
			= sz * 2) {
			for(var start = 0; start < len - sz; start+= sz * 2) {
				arr = merge(arr, start, start + sz - 1, Math.floor(start + sz * 2 - 1, len - 1));
			}
		}
		return arr;
	}
	function merge(arr, start, mid, end) {
		var i = start, j = mid + 1, tmp = [];
		for(var k = start; k <= end; k++) {
			tmp[k] = arr[k];
		}
		for(k = start; k <= end; k++) {
			if(i > mid) {
				arr[k] = tmp[j++];
				continue;
			}
			if(j > end) {
				arr[k] = tmp[i++];
				continue;
			}
			if(top[i] < tmp[j]) {
				arr[k] = tmp[i++];
			}else {
				arr[k] = tmp[j++];
			}
		}
		return arr;
	}
}

// Output Start
console.log('> Output: ' + mergeRecursiveBottom2Top(input));
// Output End