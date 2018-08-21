console.log('insertions:');

// Input Start
var input = require('../../../generator/index').getRandomNumbers();
// Input End

console.log('> Input: ' + input);

// Insertion Function
function insertion() {
	for(var i = 0, len = input.length; i < len; i++) {
		var insertion = input[i];
		var j = i;
		while(j > 0 && insertion < input[j - 1]) {
			input[j] = input[j - 1];
			j--;
		}
		input[j = insertion];
	}
	return input;
}

// Output Start
console.log('> Output: ' + insertion(input));
// Output End