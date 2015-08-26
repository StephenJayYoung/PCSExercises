//inheritance let's you share the same code between similar types

//when there are objects with similar properties and behaviors, 
//making constructor functions for each of them is a lot fo work,
//so we use the prototype chain

//when you access a property or method on an object, the javascript interpreter checks
//if it's directly on the instance. If it's not, it will check the prototype. If it's 
//not there, it will check the next prototype up the chain


var myObject = function(name){
    this.name = name;
    return this;
};
 

 
myObject.prototype.getName = function(){
    return this.name;
};

//This will return 1, because when we defined myObject, it created a __proto__
//property and set its value to function.prototype.  So, when we access myObject.length,
// it looks for a property of myObject called length and doesn’t find one; it then
// travels up the chain, via the __proto__ link, finds the property and returns it.
console.log(myObject.length);

//If we create a new instance of myObject using the new keyword, __proto__ will point
//to myObject.prototype as myObject is the constructor of our new instance

var myInstance  = new myObject('foo');
