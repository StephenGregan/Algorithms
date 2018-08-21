console.log('bubble:');

// Input Start
var input = require('../../../generator/index').getRandomNumber();
// Input End

console.log('> Input: ' + input);

// Bubble Function
function bubble(input) {
	for(var i = 0, len = input.length; i < len; i++) {
		for(var j = 0; j < len  - 1; j++) {
			if(input[j] > input[j + 1]) {
				input[j] = [input[j + 1], input[j + 1] = input[j][0]];
			}
		}
	}
	return input;
}

// Output Start
console.log('> Output: ' + bubble(input));
// Output End