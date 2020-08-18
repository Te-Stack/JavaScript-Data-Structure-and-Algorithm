var foo = {
    a : 42
};


bar = Object.create(foo);

bar.b = "hello world";

console.log(bar.a)
console.log(bar.b)