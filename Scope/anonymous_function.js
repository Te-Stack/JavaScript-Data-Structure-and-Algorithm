setTimeout( function egg(){    console.log("I waited 1 second!"); }, 1000 );




/*(function IIFE( global ) {
    var a = 4;
    console.log(a);
    console.log(global.a);
})( ball );

console.log(a);*/

undefined = true;

(function IIFE() {
    var a;
    if (a == undefined) {
        console.log("undefined get small sense ");
    }
})();

for (var i=0; i<10; i++) {    console.log( i ); } 

