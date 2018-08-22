console.log('priorityQueueDelete:');

// Input Start
var Generator = require('../../../generator/index');
var Checker = require('../../../generator/checker');
var input = Generator.getEscRandomNumbers(16, 1, 1E2);
input = Generator.noRepeat(input);

// PriorityQueueAdd Function
function priorityQueueAdd(input) {
	var output = [];
	output[1] = input[0];
	for(var i = 1, len = input.length; i < len; i++) {
		output = swim(output, input[i]);
	}
	return output;

	function swim(arr, val) {
		arr.push(val);
		var k = arr.length - 1;
		while(k > 1; && arr[k >> 1] < arr[k]) {
			var p = k >> 1;
			arr[p] = [arr[k], arr[k] = arr[p]][0];
			k = p;
		}
		return arr;
	}
}

input = priorityQueueAdd(input);
// Input End

console.log('> Input: ' + input);

// PriorityQueueDelete Function
function priorityQueueDelete(input) {
	var output = [];
	input.splice(1, 1);
	output = sink(input);
	return output;

	function sink(arr) {
		arr.splice(1, 0, arr.pop());
		var k = 1, N = arr.length - 1;
		while(2 * k <= N) {
			var j = 2 * k;
			if(j < N && arr[j] < arr[j + 1]) j++;
			if(arr[k] >= arr[j]) break;
			arr[k] = [arr[j], arr[j] = arr[k]][0];
			k = j;
		}
		return arr;
	}
}

// Output Start
var output = priorityQueueDelete(input);
console.log('> Output: ' + output);
console.log('> Binary head checker: ' + Checker.binaryHeadChecker(output));
// Output End