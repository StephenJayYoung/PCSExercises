//Push:
//The push() method adds one or more elements to the end of an array and returns
//the new length of the array.
//It returns the new length property of the object upon which the method was called.
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
console.log(sports);
// console.log(total);

//Concat
//The concat() method returns a new array comprised of the array on which it is
//called joined with the array(s) and/or value(s) provided as arguments

var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

// console.log(alphaNumeric);

var dogs = ["boxer", "lab", "pitbull"];
var cats = ["siamese", "blah", "I'm not creative today"];
var joinEm = dogs.concat(cats);
var isAddingThemTheSame = dogs + cats;
// console.log(joinEm);
// console.log(isAddingThemTheSame); //adding them is not the same, as adding them together does not return an array




