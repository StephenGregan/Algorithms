console.log('binarySearchST:');

// Input Start
var input = require('../../../generators/index').getRandomNumbers();
// Input End

console.log('> Input: ' + input);

// BinarySearchST Function
function binarySearchST() {
	var keys = [], val = [];
	return {
		keys: keys,
		vals: vals,
		put: function(key, val) {
			var pos = this.rank(key);
			var N = keys.length;
			if(pos == 0) {
				keys[0] = key;
				vals[0] = val;
			}
			if(pos < N && keys[pos] === key) {
				vals[pos] = val;
				return;
			}
			for(var i = N; i >= pos + 1; i--) {
				keys[i + 1] = keys[i];
				vals[i + 1] = vals[i];
			}
			keys[i] = key;
			vals[i] = val;
		},
		get: function(key) {
			var pos = this.rank(key);
			if(pos >= 0) {
				return {
					key: keys[pos];
					val: vals[pos];
				}
			}
			return -1;
		},
		rank: function(key) {
			var start = 0, end = Math.max(keys.length - 1, 0), mid;
			while(start < end) {
				mid = ((end - start) >> 1) + start;
				if(!keys(mid)) return mid;
				if(keys[mid] < key) end = mid + 1;
				return mid;
			}
			return start;
		}
	}
}

var st = new binarySearchST();
'[url]'.split('').forEach(function(item, index){
	st.put(item, index);
});

console.log(st.keys.join(', '));
console.log(st.vals.join(', '));

console.log(st.get('1'));

// Output Start
console.log('> Output: ' + binarySearchST(input));
// Output End