console.log('twoSum:');

// Input Start
var Generator = require('../../../generator/index');
var input = Generator.getRandomNumber(1E4, -10, 10);
input = Generator.noRepeat(input);
// Input End

console.log('> Input: ' + input);

// TwoSum
function twoSum(input) {
	var counter = 0;
	for(var i = 0, len = input.length; i < len - 1; i++) {
		for(var j = i + 1; j < len; j++) {
			if(input[i] + input[j] == 0) {
				counter++;
			}
		}
	}
	return counter;
}

// Output Start
console.log('> Output: ' + twoSum(input));
// Output End