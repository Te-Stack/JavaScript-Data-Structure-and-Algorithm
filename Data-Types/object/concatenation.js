/* concatenation can be done in two ways 
1.Concantenation using the + operator on a string
2.and also using the $ and ` which is known as string formatting 
*/

//using the + operation 
const el = "migrants"
const element =  " Solutions"
const ans = el + element + " internship is one of the best intenship for software development "
console.log(ans)


//string formatting
let name = "Ukumakube Quincy Oghenetejiri"
let role = "Software Developer"
let whoareyou = `My name is ${name} and i am a ${role}`
console.log(whoareyou)



function foo(a) {    console.log( a + arguments[1] );  }
foo( 10,32 );  

function egg(){
    try{
        return 42
    }
    finally{
        console.log("hello")
    }
}

console.log(egg())

console.log("The Secret of life is to have no Fear")