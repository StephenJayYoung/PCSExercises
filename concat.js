

function CountThemAll(n) {
		numberStr = '012345'
		lines = '';
	for (var line = 0; line<n; line++) {
		for (var number = line; number>=0; number--) {
			lines+=numberStr[number];
		}
		lines+='\n';
	}
	return lines;
	console.log(lines);
}
var doTheThing = CountThemAll(5);

var numbers = ['1','2','3','4'];

var concatanateIt = doTheThing.concat(numbers);
var forEachIt = numbers.forEach(doTheThing);

console.log(concatanateIt);
console.log(forEachIt);
