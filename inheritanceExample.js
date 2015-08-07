var inheritMe = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(inheritMe.m()); // 3
// When calling inheritMe.m in this case, 'this' refers to inheritMe

var p = Object.create(inheritMe);
// p is an object that inherits from inheritMe

p.a = 12; // creates an own property 'a' on p
console.log(p.m()); // 13
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of inheritMe, 
// 'this.a' means p.a, the own property 'a' of p