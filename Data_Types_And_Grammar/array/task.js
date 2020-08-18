/* 
Task 1 :Create a program to check for the voting age of voters,if 
the legal voting age is 22
*/

function votersAgeCheckers(age){
     let legalage = 22;
     if(age >= legalage){
         return `${age} years is a legal age and can vote`
     }
     else{
         return `${age} years  needs to grow up`
     }
}

console.log(votersAgeCheckers(35))
console.log(votersAgeCheckers(10))