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

