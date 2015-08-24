//Inheritance is a programming technique that lets you share the same code 
//between similar types

function Media(title, artist, duration) {
	Media.call(this, title, duration);
	this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);



function Media(title, duration) {
	this.title = title;
	this.duration = duration;
	this.isPlaying = false;
}

Media.prototype.play = function(){
	this.isPlaying = true;
}

Media.prototype.stop = function() {
	this.isPlaying = false;
}
