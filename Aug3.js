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

objs.forEach(paint);
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

paint.color = 'green';
paint(objs[0]);
console.log('create a paint obj and give it a color:');


//Give a function a method of its own


var paint = function(obj){
	obj.color = paint.color;
}

paint.useColor = function(color){
	paint.color = color;
}

paint.useColor('turquoise')
paint(objs[2])

//make a function that makes the dog talk
var dog = {
	noise:'woof'
}

function talk(who) {
	console.log(who.noise);
}
talk(dog);
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


function animal(name,sound) {
	return {
		name:name,
		noise:sound,
		talk: function{
	console.log(this.noise);
		}
	}
}

var dog = animal('dog','woof');

