//Task1 Create an object for a patient in the hospital
let patient = {
    name:"unknown",
    room:419,
    illness:"Coronavirus",
    age:201
}
console.log(patient)
//Task2 create a json object of voters
let voters = {
    "name":"thomas",
    "age":42,
    "State":"Delta",
    "occupation":"fisherman"
}
console.log(voters)
//Task3 bank account object 
let bankAccount = {
    current_balance:4000,
    last_trasaction_property:"You transferred 2000 last week",
    previous_balance:6000
}
let {current_balance,last_trasaction_property} = bankAccount
console.log(current_balance)
console.log(last_trasaction_property)