function paint(obj) {
	obj.color = 'red';
}

//call paint as an alias
var recolor = paint;

//call paint as an object
function paint(obj) {
	this.color = 'red';
}

//call paint as a method
var obj = {
	obj.paint = paint;
}
obj.paint();