var obj = {a:1, b:2, c:3, d:"apple", e: "elephant", f: true};

for (var prop in obj) {
  console.log("o." + prop + " = " + obj[prop]);
}
console.log(prop);
console.log(obj[prop]);
console.log(obj.a);
console.log(obj.d);
//////////////////////////////////////

var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}
//.prototype means
ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("o." + prop + " = " + obj[prop]);
  } 
}