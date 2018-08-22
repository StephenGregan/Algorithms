console.log('merge:');

// Input Start
var input1 = require('../../../generator/index').getEscRandomNumbers(6);
var input2 = require('../.././/generator/index').getEscRandomNumbers(9);
// Input End
console.info('> Input1: ' + input1 + '\n Input2: ' + input2);

// Merge Function
function merge(input1, input2) {
	var i = 0, j = 0;
	var output = [];
	while(i < input1.length || j < input2.length) {
		if(i == input1.length) {
			output.push(input2[j++]);
			continue;
		}
		if(j == input2.length) {
			output.push(input1[i++]);
			continue;
		}
		if(input1[i] < input2[j]) {
			output.push(input1[i++]);
		}else {
			output.push(input2[j++]);
		}
	}
	return output;
}

// Output Start
console.log('> Output: ' + merge(input1, input2));
// Output End