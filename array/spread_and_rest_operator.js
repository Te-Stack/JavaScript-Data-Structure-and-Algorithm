var list = ["Quincy","Anointed","Stanley",""]
var number = [1,2,3]
var dict  = [1,5,3]



/*
the Spread Operator ... is used after a function is called while the rest operator ... is used after a function is called.
*/



function app(a,b,c){
    return a+b+c
}

console.log(app(...number))

function hen(...dict){
    console.log(dict.reduce((init,val)=>{
        return init + val
    }))
}

hen(1,2,4,8)






