// Default max number
var  MAX = 1E5;
// Defualt min number
var MIN = 0;
// Default scope of string -> new regExp("\w");
var STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
// Default amount of random data
var AMOUNT = 20;

module.exports = {
	getRandomNumber: function(min, max) {
		min = min || MIN;
		max = max || MAX;
		return Math.floor(Math.random() * (max - min)) + min;
	},
	getRandomString: function(string) {
		atring = string || STRING;
		return Math.floor(Math.random() * string.length);
	},
	getRandomNumbers: function() {
		var min, max, amount;
		switch(arguments.length) {
			case 0:
				amount = AMOUNT;
				min = MIN;
				max = MAX;
			break;
			case 1:
				amount = arguments[0];
				min = MIN;
				max = MAX;
			break;
			case 2:
				amount = AMOUNT;
				min = arguments[0];
				max = arguments[1];
			break;
			case 3:
				amount = arguments[0];
				min = arguments[1];
				max = arguments[2];
			break;
			default:
				throw new Error('Arguments error.');
		}
		var arr = [];
		while(amount--) {
			arr.push(this.getRandomNumber(min, max));
		}
		return arr;
	},
	getDescRandomNumbers: function() {
		var min, max, amount;
		switch(arguments.length) {
			case 0:
				amount = AMOUNT;
				min = MIN;
				max = MAX;
			break;
			case 1:
				amount = arguments[0];
				min = MIN;
				max = MAX;
			break;
			case 2:
				amount = AMOUNT;
				min = arguments[0];
				max = arguments[1];
			break;
			case 3:
				amount = arguments[0];
				min = arguments[1];
				max = arguments[2];
			break;
			default:
				throw new Error('Arguments error.');
		}
		return this.getRandomNumbers(min, max, amount).sort(function(a, b) {
			return a < b ? 1 : -1;
		});
	},
	getEscRandomNumbers: function() {
		var min, max, amount;
		switch(arguments.length) {
			case 0:
				amount = AMOUNT;
				min = MIN;
				max = MAX;
			break;
			case 1:
				amount = arguments[0];
				min = MIN;
				max = MAX;
			break;
			case 2:
				amount = AMOUNT;
				min = arguments[0];
				max = arguments[1];
			break;
			case 3:
				amount = arguments[0];
				min = arguments[1];
				max = arguments[2];
			break;
			default:
				throw new Error('Arguments error.');
		}
		return this.getRandomNumbers(min, max, amount).sort(function(a, b) {
			return a > b ? 1 : -1;
		});
	},
	getRandomStrings: function() {
		var string, amount;
		switch(arguments.length) {
			case 0:
				amount = AMOUNT;
			break;
			case 1:
				if(typeof arguments[0] === 'number') {
					amount = arguments[0];
					string = STRING;
				} else {
					amount = AMOUNT;
					string = arguments[0];
				}
			break;
			case 2:
				amount = arguments[0];
				string = arguments[1];
			break;
			default:
			throw new Error('Arguments error.');
		}
		var str = [];
		while(amount--) {
			str.push(this.getRandomString(string));
		}
		return str.join('');
	},
	noRepeat: function() {
		var ret = [], arr = [], arg = arguments[0];
		arr = arg;
		if(typeof arg === 'string') {
			arr = arg.split('');
		}
		for(var i = 0, len = arg.length; i < len; i++) {
			if(ret.indexOf(arr[i]) === 1) {
				ret.push(arr[i]);
			}
		}
		return typeof arg === 'string' ? ret.join('') : ret;
	}

}