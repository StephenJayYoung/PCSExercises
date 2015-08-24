function diceRoll() {
	var randonNumber = Math.floor(Math.random() * this.sides) + 1;
	return randonNumber;
}
function Dice(sides) {
	this.sides = sides;
	this.roll = diceRoll;
}

var dice = new Dice(6);
var dice10 = new Dice(10);
console.log(dice.roll === dice10.roll)
//The above code is the same as the bottom code, except with the bottom code we use
//prototype

function Dice(sides) {
	this.sides = sides;
}

Dice.prototype.roll = function () {
		var randonNumber = Math.floor(Math.random() * this.sides) + 1;
		return randonNumber;
}


var dice = new Dice(6);
var dice10 = new Dice(10);
console.log(dice.roll === dice10.roll)