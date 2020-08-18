/*function doSomething(a) {    b = a + doSomethingElse( a * 2 );
    console.log( b * 3 ); }

function doSomethingElse(a) {    return a - 1; }

var b;

doSomething( 2 );
console.log(doSomethingElse(10));*/



function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }
    var b;
    b = a + doSomethingElse(a * 2);
    console.log(b *3);
}



doSomething(2);




var myReallyCoolLibrary = {
    awesome:"stuff",
    wahala: function(a) {
        console.log(a*3);
    },
    problem: function(b) {
       console.log(b - 4); 
    }
};

console.log(myReallyCoolLibrary.awesome)
myReallyCoolLibrary.wahala(2);
myReallyCoolLibrary.problem(12);