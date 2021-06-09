/*
The Array methods in this modules
filter(),forEach(),some(),every(),includes(),map(),reduce(),sort(),find(),findIndex()
*/


let list = ["Quincy","Anointed","56",465]

//Map Method
let ourMap = new Map()
ourMap.set("location","Nigeria")
ourMap.set("age",56)
console.log(ourMap)
console.log(ourMap.get("age"))

ourMap.forEach((key,value)=>{
    console.log(`I  love ${value}`)
})

list.map((p)=>{
    if(p.length < 3){
        console.log("this is Quincy using the map method")
    }
})
console.log()

//sort method
let sortedList = Array.from(list)
sortedList.sort()
console.log(sortedList)
console.log(list)
console.log()

//forEach method
list.forEach(funct)
function funct(p){
    if(p.length < 3){
        console.log("This is Quincy using the forEach method")
    }
}
console.log()

//filter Method
list.filter((p)=>{
    if(p.length<3){
        console.log(`Quincy used the filter method to get ${p} from the list`)
    }
})
console.log()

//reduce method
var reducedlist = [1,2,3,4].reduce((total,val)=>{
    return total + val
})
console.log(reducedlist)
console.log()

//every method 
var every = list.every((p)=>{
    return p.length>2
})
console.log(every)
console.log()

//some method
var some = list.some((p)=>{
    return p.length<3

})
console.log(some)
console.log()

//find method
var find1= list.find((p)=>{
    return p.length>4
})
console.log(find1)
console.log()

//findIndex method
var find2 = list.findIndex((p)=>{
    return p.length<3
})
console.log(find2)

//includes method 
var hen = [2,4,6,8]
console.log(hen.includes(4))


