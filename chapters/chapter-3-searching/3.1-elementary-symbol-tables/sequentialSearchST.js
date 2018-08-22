console.log('sequentialSearchST:');

// Input Start
var input = require('../../../generator/index').getRandomNumbers();
// Input End

console.log('> Input: ' + input);

// SequentialSearchST Function
function SequentialSearchST() {

	function node(key, val, next) {
		this.key = key;
		this.val = val;
		this.next = next;
	}

	var first = null;

	return {
		links: null,
		insertWhere: function(node, where) {
			var n = new node(node.key, node.val);
			var l = this.links;
			if(where) {
				while(l) {
					if(l.key == where.key || l.val == where.val) {
						var ll = l.next;
						l.next = n;
						n.next = ll;
						break;
					}
					l = l.next;
				}
			} else {
				n.next = l;
				this.links = n;
			}
			return null;
		},
		findWhere: function(where) {
			var l = this.links;
			var depth = 0;
			while(l) {
				if(l.key == where.key || l.val == where.val) {
					var output = { depth: depth };
					for(var key in l) if(key !== 'next') output[key] = l[key];
						return output;
				}
				depth++;
				l = l.next;
			}
			return -1;
		}
	}
}

function frequencyCounter(input) {
	var st = new sequentialSearchST();
	var minLen = 1;
	for(var i = 0; i < input.split(' ').length; i++) {
		var word = input.split(' ')[i];
		if(word.length < minLen) continue;
		if(!st.contains(word)) st.put(word, 1);
		else st.put(word, st.get(word)) + 1;
	}
	max = '';
	st.put(max, 0);
	st.keys().forEach(function(wprd) {
		if(st.get(word)) max = word;
	})
	output = max + ' ' + st.get(max);
	return output;
}

var st = new sequentialSearchST();

// insert { key: b, val: b }
st.insertWhere({
	key: 'b',
	val: 'b'
});
// insert { key: a, val: a }
st.insertWhere({
	key: 'a',
	val: 'a'
});
// Insert { key: r, val: r } before where key = a
st.insertWhere({
	key: 'r',
	val: 'r'
}, {
	key: 'a'
});
// insert key { key: b, val: b }
st.insertWhere({
	key: 't',
	val: 't'
});

console.log(JSON.stringify(st.links, null, 2));

console.log(st.findWhere({ key: 'b' }));

// Output Start
console.log('> Output: ' + sequentialSearchST(input));
// Output End