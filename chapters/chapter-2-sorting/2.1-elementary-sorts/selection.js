console.log('selection:');

// Input Start
var input = require('../../../generators/index').getrandomNumbers();
// Input End

console.log('> Input: ' + input);

// Selection Function
function selection() {
	for(var  = 0, len = input.length; i < len; i++) {
		var min = i;
		for(var j = i + 1; j < len; j++) {
			if(input[j] < input[min]) {
				min = j;
			}
		}
		input[i] = input[min], input[min] = input[i][0];
	}
	return input;
}
// Output Start
console.log('> Output: ' selection(input));
// Output End