a = 42;

var a;

console.log(a)


function onlyOne(a,b,c) {    return !!((a && !b && !c) ||        (!a && b && !c) || (!a && !b && c)); }
var a = true; var b = false;
onlyOne( a, b, b ); 
onlyOne( a, b, a ); 

Quincy = "i want to be a Security Software Engineer";
mind = "E hard o";

var Quincy;
var mind;

answer = Quincy&&mind;
ans = Quincy||mind;

console.log(answer);
console.log(ans);

console.log(Quincy === mind)

console.log(42 === "42")


var re = "42";

if(!!re) {
    console.log("yep")
}

var ran = Object(re);
console.log(ran)