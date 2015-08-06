function createObjectFromPrototype() {
  var objectCreator = arguments.callee.caller;
  // Create an object that extends the target prototype.
  var newClass = Object.create( objectCreator.prototype );
   
  // Invoke the custom constructor on the new object,
  // passing in any arguments that were provided.
  objectCreator.apply( newClass, objectCreator.arguments );
   
  // Return the newly created object.
  return newClass;
}
 
function Person(name, sex, age) {
  //enforce the use of the new keyword
  if (!(this instanceof arguments.callee)) { return createObjectFromPrototype(); }
   
  // this.populationCount++;  
  this.getName=function(){ return name };  
  this.getSex=function(){ return sex };  
  this.getAge=function(){return age};
  // this.setSex=function(newSex){ sex = newSex; };  
  // this.die=function(){ this.populationCount -- ; };
}
Person.prototype.populationCount=0;
 
var rob    = new Person('Rob','male', 24);
var jeanie = Person('Jeanie','female', 28);
 
console.log(rob.getSex());    //Rob
console.log(jeanie.getAge()); //Jeanie