function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Note elision, there is no member at 2 so it isn't visited
[2, 5, , 9,10].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

////////////////////////////////

function letsEatCake (a, b, c){
return (this.a +" and " + this.b + " and " + this.c);
}
var o = {a:"german chocolate", b:"carrot cake", c:"confetti"}

// letsEatCake.apply(o);

console.log(letsEatCake.apply(o));

//this will log all of the elements (due to forEach) at indexes 
//0, 1, 2 of the array (which are 1,2,3 in this array)
[1,2,3,].forEach(logArrayElements);
// console.log("break");
// [this.a, this.b, this.c].forEach(logArrayElements);
// [o].forEach(logArrayElements);

/////////////////////////////////////////
//Convert the code from the first array iteration exercise 
//to use .forEach instead of a for-loop

var x = [1,2,3,4,5];

for (var i=0; i < x.length; i = i + 1){
    if (i % 2 == 0){
        console.log(i + " : " + x[i]);
    }
}

function writeOutTheString(num, place){
	    if (x % 2 == 0){
        console.log(x + " : " + x[i]);
    }
};
x.forEach(writeOutTheString);

//coverted: 
var x = [1,2,3,4,5];

function writeOutTheString(num, place){
	    if (x % 2 == 0){
        console.log(x + " : " + x[place]);
    }
};
var doIT = x.forEach(writeOutTheString);
console.log(doIT);
