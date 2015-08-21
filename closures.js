var storeOassword = function(passwd) {
	var verifyPassword = function(checkPasswd){
		if(passwd === checkPasswd){
			return true;
		}
		else {
			return false;
		}
	};
return verifyPassword
}

///////////////////////////////////////////////////////////
///Iffy: an immedietly invoked function
///
var factory = (function) {
	var _id = 0;
	return function () {
		var thingID = _id++
			return {
				id: function() {
					return thingID;
				},
				color: function() {
					return (this.id() % 2) ? 'red' : 'blue';
				}
			};
	}
})();

///////////////////////////////////////
var array = ["hello", "world"];
var callbacks = [];

//create a loop and iterate
for (var i = 0; i < array.length; i++) {
  //push the function into the array callbacks
  callbacks.push(function() {
  	//log the elements of array
    console.log(array[i]);
  });
}

//push the function into the array foreach. 
callbacks.forEach(function(c) {
 c();
});

//the first thing should be a function that console.logs "hello", and a second
//thing that console.logs "world"
//
////////////////////////////////////////////////////////////////
var makeUser = (function() {// begin IIFE...
	
	var sharedLog = [];  //private; accessible only from functions defined within IIFE
	// The factory itself:
	function makeUser(name,passwd) {
		// Return a user object with three methods:
		// getName()
		// validate(str)
		// record(message) (Part b)
	}
	// Part b) only:
	// Factory method (defined within IIFE, so can access sharedLog):
	makeUser.getLog = function(user) {
	}
	return makeUser;
})();
if (typeof module != 'undefined')
	module.exports = makeUser;


