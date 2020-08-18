function CoolModule() {    var something = "cool";    var another = [1, 2, 3];
    function doSomething() {        console.log( something );    }
    function doAnother() {        console.log( another.join( " / " ) );    }
    return {        doSomething: doSomething,        doAnother: doAnother    }; 
}
let foo = CoolModule();

foo.doSomething();
foo.doAnother();


function egg(id) {
    function identity() {
        console.log(id);
    }

    return {identity:identity};
}



var ball = egg("basketball");
var car = egg("benz");

ball.identity();
car.identity();