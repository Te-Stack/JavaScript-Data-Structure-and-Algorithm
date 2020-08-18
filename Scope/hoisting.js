foo();

var foo;

function foo() {
    console.log(1);
}
foo = function() {
    console.log(2);
}


function foo() {
    console.log(3);
}



//loops

for (var i=1; i<=5; i++) {    (function(j){        setTimeout( function timer(){            console.log( j );        }, j*1000 );    })( i ); } 
