console.log('quick3Way:');

// Input Start
var input = require('../../../generator/input');
// Input End

console.log('> Input: ' + input);

// Quick3Way Function
function quick3Way(input) {
	sort(0, input.length - 1);
	return input;

	function sort(start, end) {
		if(start >= end) return;
		var lt = start, gt = end, i = start + 1, v = input[start];
		while(i <= gt) {
			if(input[i] < v) {
				input[lt] = [input[i], input[i] = input[lt]][0];
				lt++, i++;
			} else if (input[i] > v) {
				input[gt] = [input[i], input[i] = input[gt]][0];
				gt--;
			} else {
				i++
			}
		}
		sort(start, lt - 1);
		sort(gt + 1, end);
	}
}

// Output Start
console.log('> Output: ' + quick3Way(input));
// Output End