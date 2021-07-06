/*var mysym = Symbol( "my own symbol" ); mysym;              // Symbol(my own symbol) mysym.toString();   // "Symbol(my own symbol)" typeof mysym;       // "symbol"
var a = { }; a[mysym] = "foobar";
Object.getOwnPropertySymbols( a ); // [ Symbol(my own symbol) ]*/



var sym = Symbol("My own Personal Symbol");
console.log(sym)
console.log(sym.toString());
console.log(typeof(sym))

var a = { }; 
a[sym] = "foobar";
console.log(a);

console.log(Object.getOwnPropertySymbols(a))

var a = "Quincy";
console.log(a.indexOf("Q"));

console.log(JSON.stringify([1,2,undefined]))
