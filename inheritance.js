//Modify the Rect module so that all instance methods are inherited from a prototype.

var Rect = (function() {
    function Ctor(l,b,r,t) {
        this.l = l;
        this.b = b;
        this.r = r;
        this.t = t;
        this.width = width;
        this.height= height;
        this.area  = area;
        this.move  = move;
    }
    var width = function() {
        return this.r - this.l;
    }
    var height = function() {
        return this.t - this.b;
    }
    var area = function() {
        return (this.width() * this.height());
    }
    var move = function(dx,dy) {
        this.l += dx;
        this.r += dx;
        this.b += dy;
        this.t += dy;
    }

    return Ctor;
})()

Rect.prototype


//which would look like this:
var Rect = (function() {
    function Ctor(l,b,r,t) {
        this.l = l;
        this.b = b;
        this.r = r;
        this.t = t;
    }
    Ctor.prototype.width = function() {
        return this.r - this.l;
    }
    Ctor.prototype.height = function() {
        return this.t - this.b;
    }
    Ctor.prototype.area = function() {
        return (this.width() * this.height());
    }
    Ctor.prototype.move = function(dx,dy) {
        this.l += dx;
        this.r += dx;
        this.b += dy;
        this.t += dy;
    }

    return Ctor;
})()

var rect1 = new Rect(0,0,1,2)
rect1.area()
/////////////////////////////////////////////////////////

function Super() {}
Super.prototype.a = 'a';

function Sub() {}
var adoptee = new Super();
Sub.prototype = adoptee;
adoptee.constructor = Sub;
//OR
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.b = "b";

var sub = new Sub();
sub.a
sub.b

sub.hasOwnProperty('b')
'b' in sub
sub instaceOf Super

