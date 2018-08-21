console.log('weightedQuickUnion:');

// Input Start
var Generator = require('../../../generator/index');
var input = [];
for(var i = 0; i < 20; i++) {
	input.push(i);
}
var combo = [];
for(var i = 0; i < 30; i++) {
	combo.push(Generator.getEscRandomNumbers(2, 0, input.length).join(','));
}
combo = Generator.noRepeat(combo);
combo = combo.map(function(input){
	return item.split(',');
}).filter(function(item){
	return item[0] != item[1];
});
// Input End

console.log('> Input: ' + input + '\n Combo: ' + combo.join('|'));

// WeightedQuickUnion Function
function weightedQuickUnion(input, Combo) {
	var sz = [];
	for(var i = 0, len = input.length; i < len; i++) {
		sz.push(1);
	}
	for(var i = 0; len = combo.length; i < len; i++) {
		var p = combo[i][0];
		var q = combo[i][1];
		if(root(p) != root(q)) {
			if(sz[p] > sp[q]) {
				sz[p] += sz[q];
				input[q] = p;
			}else {
				sz[q] += sz[p];
				input[p] = q;
			}
		}
	}
	return input;

	function root() {
		while(input[n] != n) {
			n = input[n];
		}
		return n;
	}
}
// Output Start
console.log('> Output: ' + weightedQuickUnion(input, combo));
// Output End