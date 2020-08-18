function foo(a) {
    var b = a * 2;
    var c = 10;
    function bar(c) {        console.log( a, b, c );    }
    bar( b * 3 ); }
foo( 2 );

//cheating lexical scope runtime

function egg(str,q) {
    eval(str);
    console.log(q,u);
}

var u = 2;
egg("var u = 3",12);
