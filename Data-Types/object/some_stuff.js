var e = Function("a","return a * 3");

console.log(e);

var f =e(3);
console.log(f);

var h = new RegExp( "^a*b+", "g" ); 

console.log(h)


console.log(Date.now())

console.log(Date())

function foo(x) {
    if(!x) {
        throw Error("your matter self ehn")
    }
}

console.log(foo());