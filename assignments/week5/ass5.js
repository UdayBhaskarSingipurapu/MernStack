let a=10;
let b=20;
console.log("sum:",a+b);
console.log("diff:",b-a);
console.log("product:",a*b);
console.log("quotient:",b/a);



console.log("                  ")
console.log("==>testing unary increment & decrement operators")
let x = 10;
//unary increment (++)
console.log("Original value of x:", x);
console.log("After incrementing (++x):", ++x); // Pre-increment: increments value of x and then returns x
console.log("after pre-increment:", x);
console.log("After incrementing (x++):", x++); // Post-increment: returns value of x and then increments x
console.log("after post-increment:", x);

x = 10;
//unary decrement (--)
console.log("\nOriginal value of x:", x);
console.log("After decrementing (--x):", --x); // Pre-decrement: decrements value of x and then returns x
console.log("after pre-decrement:", x);
console.log("After decrementing (x--):", x--); // Post-decrement: returns value of x and then decrements x
console.log("after post-decrement:", x);







console.log("                  ")
console.log("==>verifying comparison operators")
let u=10;
let v="10";
console.log("u is equal to v?",u==v)   //equal to(==)
console.log("u is not equal to v?",u!=v)   //not equal to(!=)
console.log("u is strictly equals to v?",u===v)    //strictly equals to(===)
console.log("u is not strictly equals to v?",u!==v)    //strictly not equals to(!==)
console.log("u is greater than v?",u>v)   //greater than(>)
console.log("u is less than v?",u<v)   //less than(<)
console.log("u is greater than or equals to v?",u>=v)   //greater than or equals to(>=)
console.log("u is less than or equals to v?",u<=v)   //less than or equals to (<=)






console.log("                  ")
console.log("==>difference between == and === operators")
let s = 5;      // number
let t = '5';    // string


console.log("Using == operator:"); // == consider values only not the type
console.log("Is '5' == 5?", t==s);      
console.log("Is '5' == '5'?", t==t);  
console.log("Is 5 == 5?", s==s);          


console.log("\nUsing === operator:");  //=== consider values as well as types
console.log("Is '5' === 5?", t===s);       
console.log("Is '5' === '5'?", t===t);   
console.log("Is 5 === 5?", s===s);
