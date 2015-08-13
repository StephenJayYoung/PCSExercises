//indexOf
var anyString = 'Brave new world';
console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
console.log(anyString.indexOf("n"));
//slice
//This method returns a shallow copy of a portion of an array into a new array object
//It slices from the first index to the second index in the paramaters
//As a negative index, end indicates an offset from the end of the sequence. 
//slice(2,-1) extracts the third element through the second-to-last element in the sequence.
//If end is omitted, slice extracts to the end of the sequence (arr.length)
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
console.log(citrus);

var toppings = ["green peppers", "mushrooms", "sausage", "anchovies", "onions", "tomatoes"];
var theOnesIWant = toppings.slice(0,1);
var addIns = ["chocolate", "peppers"]
var myPizza = theOnesIWant + " " + addIns;
console.log(myPizza);

// Using slice, create newCar from myCar.
// var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
// var newCar = myCar.slice(0, 2);
// console.log(newCar);