var gasolineLevel = 10;

function useGas(amt){
	if(gasolineLevel - amt < 0) {
		console.log("out of gas :[");
	} else {
		gasolineLevel -= amt;
	}
};

return {
	radioStation: "104.5",

	changeStation: function(station){
		this.radioStation = station;
	},
	go: function(speed){ useGas(speed); }
	};
};

var ferrari = Car()
ferrari.go(10);