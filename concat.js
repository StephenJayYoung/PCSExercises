

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
console.log(CountThemAll(5));