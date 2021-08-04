/* 
task 2 : build another program that will return 
a boolean value in a callback function
*/

function boss(){
    console.log("this is a the main function")

    function smallboy(){
        return true
    }
     
    return smallboy();

}


console.log(boss())