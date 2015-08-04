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

var dog = {
noise:'woof',
talk: function(){
	console.log(this.noise);
	}
}
dog.talk()




