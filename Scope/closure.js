function foo() {
    var a =2;
    function bar() {
        console.log(a);
    }
    return bar;
}


var baz = foo();

baz();


function apple() {
    var b =12;

    function ball() {
        console.log(b);
    }

    cup(ball);

}

function cup(fn) {
    fn();

}


function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    },1000)
}

wait("boss u don try today abeg");