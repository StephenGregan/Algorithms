console.log('evaluate:');

//Input start
var input = '(1 + (2 + 3) * (4 + 5) ) )';
input = input.replace(/\s/g, '').split('');
// Input End
console.log('> Input: ' + input.join(' '));

// Evaluate
function evaluate(input) {
	input = input.reverse();
	var len = input.length;
	var optStack = [];
	var valStack = [];
	while(len--) {
		var item = input[len];
		switch(item) {
			case "+":
			case "-":
			case "*":
			case "/":
				optStack.push(item);
				break;
			case "(":
				break;
			case ")":
				var a = valStack.pop();
				var b = valStack.pop();
				var opt = optStack.pop();
				valStack.push(eval(b + opt + a));
				break;
			default:
				valStack.push(item);
		}
	}
	return valStack.pop();
}

// Output Start
console.log('> Output: ' + evaluate(input));
// Output End