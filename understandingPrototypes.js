function diceRoll() {
	var randonNumber = MAth.floor(Math.random() * this.sides) + 1;
	return randonNumber;
}
function Dice(sides) {
	this.sides = sides;
	this.roll = diceRoll;
}

var dice = new Dice(6);
var dice10 = new Dice(10);

//The above code is the same as the bottom code, except with the bottom code we use
//prototype

function diceRoll() {
	var randonNumber = MAth.floor(Math.random() * this.sides) + 1;
	return randonNumber;
}
function Dice(sides) {
	this.sides = sides;
	this.roll = diceRoll;
}

var dice = new Dice(6);
var dice10 = new Dice(10);