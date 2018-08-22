console.log('quickSort:');

// Input Start
var input = require('../../../generator/index');
// Input End

console.log('> Input: ' + input);

// QuickSort Function
function quickSort(input) {
	sort(0, input.length - 1);
	return input;

	function sort(start, end) {
		if(start >= end) {
			return;
		}
		var mid = partition(start, end);
		sort(start, mid - 1);
		sort(mid + 1, end);
	}

	function partition(start, end) {
		var i = start, j = end + 1; k = input[start];
		while(true) {
			while(input[++i] < k) if(i === end) break;
			while(input[--j] > k) if(j === start) break;
			if(i >= j) break;
			input[i] = [input[j], input[j] = input[j]][0];
			return j;
		}
	}
}
// Output Start
console.log('> Output: ' + quickSort(input));
// Output End