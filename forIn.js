// The for..in statement iterates over the enumerable properties of an object,
//  in arbitrary order. For each distinct property, statements can be executed.

//So, basically, we can iterate over all of the objects in an array, and then 
//return the properties of those objects (and not the keys);

var stuff = {a:1, b:2, c:3, d:"apple", e: "elephant", f: true};

// for (var prop in stuff) {
//   console.log(stuff[prop]);
// }

console.log(stuff);
// console.log(prop);
// console.log(obj[prop]);
// console.log(obj.a);
// console.log(obj.d);
//////////////////////////////////////

// var coloredFurniture = {
// couch: "red",
// chair: "blue",
// bed: "white"
// };

// console.log(coloredFurniture);

// for (var prop in coloredFurniture) {
// 	// console.log(prop);
// 	console.log(coloredFurniture);
// }

// var triangle = {a:1, b:2, c:3};

// function ColoredTriangle() {
//   this.color = "red";
// }
// //.prototype means
// ColoredTriangle.prototype = triangle;

// var obj = new ColoredTriangle();

// for (var prop in obj) {
//   if( obj.hasOwnProperty( prop ) ) {
//     console.log("o." + prop + " = " + obj[prop]);
//   } 
// }