console.log('mergeRecursiveTop2Bottom:');

// Input Start
var input = require('../../../generator/index');
// Input End

console.log('> Input: ' + input);

// MergeRecursiveTop2Bottom Function
function mergeRecursiveTop2Bottom(input) {
	return sort(input, 0, input.length - 1);

	function sort(arr, start, end) {
		if(start >= end) {
			return;
		}
		var mid = ((end - start) >> 1) + start;
		sort(arr, start, mid);
		sort(arr, mid + 1, end);
		return merge(arr, start, mid, end);
	}

	function merge() {
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
			if(tmp[i] < tmp[j]) {
				arr[k] = tmp[i++];
			} else {
				arr[k] = tmp[j++];
			}
		}
		return arr;
	}
}

// Output Start
console.log('> Output: ' + mergeRecursiveTop2Bottom(input));
// Output End