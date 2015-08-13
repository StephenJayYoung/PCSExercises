

var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
console.log(sports);
console.log(total);

var allOfThem = function(){
	return sports;

};

function assert(claim,warning) {
    if (!claim) console.log(warning);
}

assert((allOfThem(3) === 1), "This isn't working!!!");
// assert();