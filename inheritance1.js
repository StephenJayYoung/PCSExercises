
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
	var rect = new Rect(2,3)
	rect.area