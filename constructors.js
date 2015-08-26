//Constructor functions describe how an object should be created
//Good for creating multiple objects of the same type
//each object created is known as an inctance of that object
//


//this is a constructor function
function Contact(name, email) {
	this.name = name; //"this" means a new instance of name.
	this.email = email;
	return this; //this is not necessary, but could be done
}
//this is the instance of the object (it's inherited from the object)
//"new" turns a regular function call into a constructor function
 var contact = new Contact("Steve", "StephenJayYoung@gmail.com");
 ////////////////////////////////////////////////