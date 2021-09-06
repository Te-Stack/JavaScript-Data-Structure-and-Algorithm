function Circle(radius){
    this.radius = radius

    let defaultLocation = {x:0, y:0}
    let computeOptimumLocation = function(factor){

    }
    this.draw = function(){
        let x,y;

        computeOptimumLocation(0.1)

        console.log('draw')
    }

    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation
        },
        set:function(value){
            if(!value.x || !value.y){
                throw Error("Oboy u knowv that guy wey dem dey call Quincy na him cause this error na boss him be o na him be boss but e be like say your error na invalid locATION lol")
            }
            defaultLocation = value
        }
    })
}

const circle = new Circle(10);
circle.draw();
console.log(circle.radius)

console.log()

circle.defaultLocation = 1





