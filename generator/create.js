var fs = require('fs');
var path = require('path');

// node 1.2 / test.js
var argv = process.argv;
if(argv.length < 3 || argv.length > 4) {
	console.log('Usage: node 1.3/binaryTree (-d)');
	process.exit(0);
}

var del = argv[3] === '-d';
var name = argv[2].replace(/\.\w+$/, '').split('/')[1];
var chapterSelection = argv[2].replace(/\.\w+$/, '').split('/')[0];
var chapter = chapterSelection.split('.')[0];
var section = chapterSelection.split('.')[1];
var xtpl = fs.readFileSync(path.join(__dirname, 'file.xtpl')).toString();
var root = path.join(__dirname, '../chapters');
xtpl = xtpl.replace(/%-\s*(\w+?)\s*%>/gm, name);

fs.readdirSync(root).forEach(function(item){
	if(item.indexOf(chapter) === -1) {
		return;
	}
	fs.readdirSync(path.join(root, item)).forEach(function(s) {
		if(s.indexOf(chapterSelection) === -1) {
			return;
		}
		var p = path.join(root, item, s, name + '.js');
		if(del) {
			if(fs.existsSync(p)) {
				console.log('Delete file: ' + p);
				fs.unlinkSync(p);
			} else {
				console.log('File does not exist: ' + p);
			}
		} else {
			console.log('Create file: ' + p);
			fs.writeFileSync(p, xtpl);
		}
	})
})