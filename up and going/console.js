console.log("hello world");


console.log("fool");

function User(){    var username, password;
    function doLogin(user,pw) {        username = user;        password = pw;
        // do the rest of the login work 
        var publicAPI = {        login: doLogin    };
        return publicAPI; }
    // create a `User` module instance 
    var fred = User();
    fred.login( "fred", "12Battery34!" );  

}


var basket = ["egg","biscuit","ball"];

console.log(basket);


var food = {
    a:"egg",
    b:"yam",
    c: "banga"
}

console.log(food)


var i = 0;


for (var i = 0; i <=9; i = i+1){
    console.log(i);   
}

var a = 42;

var b = (a>41) ? "hello" : "world";

console.log(b)

var quincy = 25;

if (quincy < 14) {
    console.log("Quincy da boss");
}
else {
    console.log("Quincy go still blow last last ")
}

