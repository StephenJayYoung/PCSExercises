var calculator = {
	sum: 0,
	add: function(value){
		this.sum= this.sum + value;
	},
	clear: function() {
		this.sum = 0;
	},
	equals: function() {
		return this.sum;
	}
}
calculator.add(1)
calculatur.add(2)
calculator.equals()