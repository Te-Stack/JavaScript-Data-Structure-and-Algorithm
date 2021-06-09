function Circle(raduis){
    this.raduis = raduis;
    this.draw = function(){
        console.log('draw')
    }
}

const circle =new Circle(10)

for(let key in circle){
    if (typeof circle[key] !== 'function'){
        console.log(key,circle[key])
    }
}

const key = Object.keys(circle);
console.log(key);
