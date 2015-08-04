function paint(obj) {
	obj.color = 'red';
}

//call paint as an alias
var recolor = paint;

//call paint as an object
function paint(obj) {
	this.color = 'red';
}

//call paint as a method
var obj = {}
obj.paint = paint;
obj.paint();

//use paint as a callback with forEach on some array of objects


//use forEach
var objs = [{name:'fence'},{name:'car'},{name:'bicycle'}];

objs.forEach(paint);
console.log(objs.forEach(paint));

//replace the reference to paint as a function
//definition in that same spot

objs.forEach(function(blah){
	blah.color='blue'
})

console.log(objs);
