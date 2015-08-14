var fish = ["one","two"];

function addOne(total,item) { return total+1;}
.reduce(addOne,0);
fish.reduce(addOne);

