let check_prime = [26,39,51,53,57,79,85];




/*function prime(num){
    for(el in num) {
        if(el%2==0){
            console.log("[el] is not a prime number" )
        }
        else{
            console.log("[el] is a prime number")
        }
    }
}*/


function prime(num){
    for(el in num) {
        if(el%2==0){
            console.log(`${el} is not a prime number` )
        }
        else{
            if(el%3==0){
                console.log(`${el} is not a prime number`)
            }
            else{
                console.log(`${el} is a prime number`)
            }
        }
     
    }
    
}


prime(check_prime);


function najustcarrydo(num){
    for(el in num){
        switch (true) {
            case el%2==0:
                console.log(`${el} is not a prime number`)
                break;
        
            default:
                break;
        }

    }
}

najustcarrydo(check_prime)