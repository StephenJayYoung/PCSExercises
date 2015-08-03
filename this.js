
//Using .call and .apply, as well as using this

function multiply(c, d){
  return this.a * this.b * c * d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
// .call:method calls a function with a given 
// this value and arguments provided individually
multiply.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
// .apply: The apply() method calls a function with a given 
// this value and arguments provided as an array
// multiply.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

console.log(multiply.apply(o, [10, 20]));


//////////////////////////////////////////////

//using .call and .apply and this
function addAndRoundDown (a,b,c,d){
return Math.floor(this.a + this.b + this.c + this.d);
}
var o = {a:1.1, b:1, c:3.5, d: 900.1}

addAndRoundDown.apply(o);

console.log(addAndRoundDown.apply(o));

///////////////////////////////////////////




