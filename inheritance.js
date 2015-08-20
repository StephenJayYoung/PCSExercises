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