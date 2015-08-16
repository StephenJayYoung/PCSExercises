function addOne(total,item) { 
	return total + item.length
	;}

// fish.reduce(addOne);

var listOfWords = ["yo", "what", "words"];

listOfWords.reduce(addOne,0); 
console.log(listOfWords.reduce(addOne,0));

function subtractOne(total, thing) {
	return total - thing.length
};

var allTheThings = ["one","two","three","four","five"];
listOfWords.reduce(subtractOne,0);
console.log(listOfWords.reduce(subtractOne,0));
