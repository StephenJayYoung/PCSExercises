function paint(obj) {
	obj.color = 'red';
}

//call paint as an alias
var recolor = paint;

//call paint as an object
//using "this." In most cases, the value of this is determined 
//by how a function is called. It can't be set by assignment 
//during execution, and it may be different each time the function
// is called.
//
function paint(obj) {
	this.color = 'red';
	this.amount = '1 liter';
}


//call paint as a method
// It's a method because it's an action being called on an object
var obj = {}
obj.paint = paint;
obj.paint();

// function paint(obj) {
// 	obj.color = 'red';
// }

//use paint as a callback with forEach on some array of objects
var objs = [{name:'fence'},{name:'car'},{name:'bicycle'}];

var callBack = objs.forEach(paint);
console.log(callBack);
// console.log(objs.forEach(paint));

//replace the reference to paint as a function
//definition in that same spot

objs.forEach(function(blah){
	blah.color='blue'
})

// console.log(objs);

//create a paint object and give it a property
var paint = function(obj){
	obj.color = paint.color;
}



// var Ty = {name:'Ty'}

// paint(Ty)

var paint = function(object){
	object.color = paint.color;
}

var Steve = {
	name: "Steve",
	// school: "PCS"
}
paint.color = 'green';
paint(Steve)

paint(objs[0]);
console.log('create a paint obj and give it a color:');


//Give a function a method of its own
var cat = {
	name: "shackleton",
	color : "blue"
}

var paint = function(obj){
	obj.color = paint.color;
}

paint.useColor = function(colorName){
	paint.color = colorName;
}

paint.useColor('turquoise');



Object.keys(paint);
paint.color
paint(cat);



//make a function that makes the dog talk
var dog = {
	noise:'woof'
}

function talk(who) {
	console.log(who.noise);
}
talk(dog);
//////////////////////////////////
///make a function that makes an elephant define itself
var elephant = {
	iAm : "I'm an elephant!",
};

function whatAmI(who) {
	console.log(who.iAm);
}
talk(elephant);
//this contains lexical scoping - pertains to where the words appear/
//where the function was called

//lexical scoping looks inside the function for the code
//dynamic scoping: looks at where the function was called from

var dog = {
noise:'woof',
talk: function(){
	console.log(this.noise);
	}
}
dog.talk()

// using a duck object
var duck = {
	noise:'quack',
	talk: dog.talk
}
//duck.talk will become 'quack' because it inherits the
//'this' from the above function, which, in the duck object,
//will be quack
duck.talk();

//using "call": this lets you specify a different "this". Call is
//a method of talk itself (which is a method of dog).
//Here, what it's saying is: call dog.talk, but with duck instead
dog.talk.call(duck);

//using "apply": this is very similar to call. It will do the same 
//thing here. But, if you have more arguments, "apply" will let
//you out in an array with more stuff
dog.talk.apply(duck,['more','stuff']);

//use apply to find the largest number in an array
var nums = [9,5,8,2,4,11,8,2,7,1]
// Math.max(2,3,4)
Math.max.apply(null,nums);

//variables live in a scope, properties live in an object. There is one
//weird exception - the Global scope. You can always refer to global 
//objects with the word "this"
//
//window: this is a global variable. Every global variable is a
//property of window. Every global variable is a property of window


//Using Factories
//
//We can write a function that can make dog and sheep and cat and arrdvark 
//so that each animal has the same properties, but it's values and
//properties are customized by giving it arguments. 
//Every single animal should behave like the handcrafted dog above
//


function makeAnimal(name,sound) {
	return {
		name:name,
		noise:sound,
		talk: function(){
		console.log(this.noise);
		}
	};
}


var dog = makeAnimal('dog','woof');
var hippo = makeAnimal("hippo","askljdhf","12345")

// Write two versions of a factory which makes animal instances which all share
//  a single copy of their talk method.
First implement talk as a global function.

	talk: function(){
		console.log(this.noise);
	}



function smallAnimal(name,sound,noise) {
	return {
		name: name,
		noise: sound,
		talk: function(){
		console.log(this.noise);
	}
	}
}

function largeAnimal(age,playful,talk) {
	return {
		age: age,
		playful: playful,
		talk: function(){
		console.log(this.noise);
	}
	}
}

var dog = smallAnimal("dog","woof","bark");
var guerilla = largeAnimal("5","true","ohhAhhAhh");
console.log(dog.talk);
console.log(guerilla.talk);

////////////
///
///
var cat = {
	name: this.name = "shackleton",
	color: this.color = "blue"
}

var house = {
	paint: function(color) {
		this.color = color
	}
}

house.paint.call(cat);
//////

//find the largest number in an array
var nums = [9,5,8,2,4,11,8,2,7,1,0,99,25,3,6,42];
Math.min.apply(null,nums);
//////////////////////////////////////////////
function talk() {
    console.log(this.noise);
}
var animals = [dog, cat, canary];

var dog = {noise:"woof"};
var cat = {noise:"meow"};
var canary = {noise:"chirp"};

animals.allTalk = function() {
    this.forEach(function(element) {
        talk.call(element)
    })
}


// animals.allTalk = function() {
//     this.forEach(talk);
// }
animals.allTalk();
/////////////////////////////////
function talk() {
    console.log(this.noise);
}
var animals = [dog, cat, canary];

var dog = {noise:, talk: talk};
var cat = {noise:"meow",talk: talk};
var canary = {noise:"chirp",talk: talk};

var animals = [dog, cat, canary];
animals.allTalk = function() {
    animals.forEach(talk);
}
animals.allTalk();
/////////////////////////////////////////
////This needs some fixing...
function talk() {
    console.log(this.noise);
}
var animals = [dog, cat, canary];

var dog = {noise:"bark", talk: talk};
var cat = {noise:"meow",talk: talk};
var canary = {noise:"chirp",talk: talk};

animals.allTalk = function(){
	animals.forEach( function(animal)
	{
		animal.talk()
	})
}
animals.allTalk()
//////////////////////////////

function marbleFactory(size,color) {
	return {
		size:size,
		color:color,
		isBigger: function(other){
			if (this.size < other.size ){
				return true;
			}
			else {
				return false;
			}
		}
	}
}





var marble1 = marbleFactory(1,"blue");
var marble2 = marbleFactory(3,"red");

marble1.isBigger(marble2);





///////////////////////////////////////

//1. Create a car factory, that takes the paramaters: make, model and color. 
//Return a car from that car factory
//which is a black honda accord
//2. Add a method to your carFactory that will allow you to give each car a unique honking sound
//
//3. The cars that were manufactured before 2009 have been found to be unsafe. Add a
//method to your carFactory that will check the car's year, and return "safe" or "true"
//if the car was manufactured after 2009, or "unsafe" or "false", if the car was manufactured 
//before 2009
//4. Create a method that will manufacture 100 cars
//5.Create a method that
// will give a car a ticket if it drives over 75mph
//6. Create an array of 4 car objects. Create a method that will sort these 4 car objects by the names you've given them, 
//in alphabetical order
//7. 
//


function carFactory(make, model, color, year, sound) {
	return {
		make: make,
		model: model,
		color: color,
		manufactureYear: year,
		noise: sound,
		honk: function(){
			console.log(this.noise);
		},
		assemble :function(a,b){
			console.log(a * b + this.noise);
		}
		goingTooFast: function(speed) {
			if (speed > 100) {
				console.log("Slow down, you cray!");
			}
			else {
				console.log("You are a law abiding citizen!");
			}
		}
		//this still needs some work...
		// makeAHundred: function(){
		// 	var allOfThem = {};
		// 	for(var i = 0, i< number, i++){
		// 		allOfThem[i].push
		// 		console.log allOfThem;
		// 	}
		// }

	}
}


var honda = carFactory("honda", "accord", "black", "2008", "ho");



//
//
//
