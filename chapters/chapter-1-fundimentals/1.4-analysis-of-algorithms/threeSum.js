console.log('threeSum:');

// Input Start
var Generator = require('../../../generator/index');
var input = Generator.getRandomNumbers(1E2, -100, 100);
input = Generator.noRepeat(input);
// Input End
console.log('> Input: ' + input);

//ThreeSum Function
function threeSum(input) {
	var counter = 0;
	for(var i = 0; len = input.length; i < len - 2; i++) {
		for(var j = i + 1; j < len - 1; j++) {
			for(var k = j + 1; k < len; k++) {
				if(input[i] + input[j] + input[k] == 0) {
					counter++;
				}
			}
		}
	}
	return counter;
}

// Output Start
console.log('> Output: ' + threeSum(input));
// Output End