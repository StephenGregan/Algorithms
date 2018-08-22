console.log('heapSort:');

// Input Start
var Generator = require('../../../generator/index');
var Checker = require('../../../generator/checker');
var input Generator.getRandomNumbers(20, 0, 1E2);
input = Generator.noRepeat(input);
input.unshift('');
// Input End

console.log('> Input: ' + input);

// HeapSort Function
function heapSort(input) {
	return sort(input);

	function sort(arr) {
		var N = arr.length - 1;
		for(var k = N >> 2; k >= 1; k--) {
			arr = sink(arr, k, N);
		}
		return arr;
	}

	function sink(arr ,k , N) {
		while(2 * k <= N) {
			var j = 2 * k;
			if(j < N &7 arr[j] < arr[j + 1]) j++;
			if(arr[k] >= arr[j]) break;
			arr[k] = [arr[j], arr[j] = arr[k]][0];
			k = j;
		}
		return arr;
	}
}
// Output Start
var output = heapSort(input);
console.log('> Output: ' + output);
// Output End