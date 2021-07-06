var a = {    val: [1,2,3],
       toJSON: function(){        return this.val.slice( 1 );    } };
var b = {    val: [1,2,4],
    toJSON: function(){        return "[" +            this.val.slice( 1 ).join() +        "]";    } };
JSON.stringify(a);