var a= 42.9244;

console.log(a.toFixed(0))
console.log(
    a.toFixed(1),
    a.toFixed(2),
    a.toFixed(3)

)
  

var quincy = {
    age:42,
    town:"Saepele"
    
}

console.log(quincy.age);

console.log(Number.isInteger(42));


var cup = [1,2,3];
var ball= cup;

ball.push(4);

console.log(cup)
ball;

var oghene = {
    "age":19,
    "class":"level"

};

console.log(oghene.class)

console.log(Object.prototype.toString.call([1,2,3]))
console.log(Object.prototype.toString.call("[1,2,3]"))
console.log(Object.prototype.toString.call({1:1}))
console.log(typeof([1,2]))
console.log(typeof("1"))



var n = String([1,2,3]);
console.log(n);

console.log(Symbol("1"))