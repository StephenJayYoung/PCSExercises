
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

///////////////////////
var Square = (function() {
	function Ctor(size) {
		Rect.call(this,size,size);
	}
Ctor.prototype = new Rect();
Ctor.prototype.constructor = Square;
Ctor.prototype.size = function(num) {
	if (arguments.length > 0) {
		this.width = num;
		this.height = num;
	} else {
		return this.width;
	}
}
return Ctor
})()

