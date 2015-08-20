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