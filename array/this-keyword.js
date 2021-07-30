function identify() {    return this.name.toUpperCase(); }
function speak() {    var greeting = "Hello, I'm " + identify.call( this );    console.log( greeting ); }
var me = {    name: "Kyle" };
var you = {    name: "Reader" };

console.log(identify.call( me ))
console.log(identify.call( you ))

speak.call( me ); 
speak.call( you );  




function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log("draws")
        }
    }
}

const circle = createCircle(1)
console.log(circle)

function Circle(radius){
    this.raduis = radius;
    this.draw = function(){
        console.log("draw")
    }
}


const another =new Circle(1)
console.log(another)