
//Modify the Rect module so that the instance method area is inherited from a prototype
var Rect = (function() {

    var area = function() {
        return (this.width() * this.height());
    }

    function Ctor(w,h) {
        this.width = w || 1;
        this.height = h || 1;
        this.area = area;
    }

    return Ctor;
})()

//which will look like this..

var Rect = (function() {

    function Ctor(w,h) {
        this.width = w || 1;
        this.height = h || 1;
    }
       Ctor.prototype.area = function() {
        return this.width * this.height;
    }

    return Ctor;
})()
/////////////////////////////////////////////////////
//In a new IIFE, implement a subclass of Rect called Square. The Square
//constructor needs only one parameter: Square(size), and it should call
//the parent class constructor (Rect(width,height)) to set the new instance's
//properties. A Square instance should inherit the area method of Rectangles 
//without needing any changes
var Square = (function() {
    function Ctor(size) {
    this.width = size || 1;
    this.size = size || 1;
    }
    Ctor.prototype = new Rect;
    Ctor.prototype.constructor = Square;
    }
    return Ctor;
})()
Square(1);
Square()


var Rect = (function() {

    var area = function() {
        return (this.width() * this.height());
    }
    var square = function() {
    	return (this.width() * this.height() * (this.width() * this.height())
    }

    function Ctor(w,h) {
        this.width = w || 1;
        this.height = h || 1;
        this.area = area;
    }

    return Ctor;
})()

//////////////////////////////////
///Within the Square module, add an inheritable instance method size which 
///acts as both a getter and setter for a square's size. That is, square.size() 
///should return the current size of square, and square.size(num) should set the 
///size to num
var Rect = (function() {
	var instances = [];
  function Ctor(w,h) {
    this.width = w || 1;
    this.height = h || 1;
    // this.area = area;
}
Ctor.every = function(){
	return instances.slice();
}
Ctor.prototype.area = function() {
	return (this.width * this.height);
}
    return Ctor;
})()

var r1 = new Rect(1,1);
		r2 = new Rect(2,2);
		r3 = new Rect(3,3);
var all = Rect.every();
//////////////////////////////////////////////
///
///
///
///
var Animal = (function() {

    function Thing(walk) {
        this.move = "walk";
    }
       Thing.prototype.bird = function() {
       	this.name = this.move;
    }
    	Thing.prototype.fish = function() {
    	}


    return Thing;
})()



var animals = new animal
Animal //this will show the Ctor object





