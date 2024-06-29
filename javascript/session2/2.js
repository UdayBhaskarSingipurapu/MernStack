//variables declared with 'var' keyword will be hoisted
//Hoisted:
// 1.Function Declarations
// 2.Variable Declarations using var (but not their initializations)

//variables declared with 'let' and 'const' will not be hoisted
// Non-Hoisted:
// 1.Function Expressions
// 2.Variable Declarations using let and const

console.log(bar);  //undefined
console.log(foo);  //cannot access foo before initialization
var bar=10;
let foo=20;

//the above code is interpreted as 
var bar;
console.log(bar);
bar=10;
console.log(foo);
let fo=20;