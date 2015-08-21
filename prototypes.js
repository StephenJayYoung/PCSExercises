
//How are these different?
function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();
console.log(objA);


function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
console.log(B);

//ObjA is missing a value that makes it a constructor
//To fix it, do this:
function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default', constructor:A};
var objA = new A();
console.log(objA);


function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
console.log(objB);

////////////////////////////////////////////////////