console.log("Binary Search:");

// Input Start
var Generator = require('../../../generator/index');
var input = Generator.getEscRandomNumber(10);
var index = Generator.getRandomNumber(0, input.length - 1);
var key = input[index];
// Input End
console.log("> Input: " + input + "(index: " + index + "key: " + key + ")");

//Binary Search
function binarySearch(input, key) {
	return indexOf(input, key);

	function indexOf(a, k) {
		var start = 0;
		var end = a.length - 1;
		while(start <= end) {
			var mid = Math.floor((end + start) / 2) + start;
			if(k < a[mid]) {
				end = mid - 1;
			}else if(k > a[mid]) {
				start = mid + 1;
			}else {
				return mid;
			}
		}
		return -1;
	}
}

// Output Start
console.log("> Output: " + binarySearch(input, key));
// Output End
