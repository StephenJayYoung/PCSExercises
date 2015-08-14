

var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// console.log(sports);
console.log(sports);

// var allOfThem = function(){
// 	console.log(total);
// };
// allOfThem(sports);

function assert(claim,warning) {
    if (!claim) console.log(warning);
}



assert((allOfThem(total) === [ 'soccer', 'baseball', 'football', 'swimming' ]), "This isn't working!!!");
// assert();

//using assert for the card functions:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert 		(cardTools.rank(0)===1,		"Test 1 failed"); //old-style assertion
expectValue	(cardTools.rank(0),  1,		"rank(0)");		  // same test in new style
assert 		(cardTools.rank(3)===1,		"Test 2 failed");
expectValue	(cardTools.rank(3),  1,		"rank(3)");
assert 		(cardTools.rank(51)===13,	"Test 3 failed");
expectValue	(cardTools.rank(51),  13,	"rank(51)");