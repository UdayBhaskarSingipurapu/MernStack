//strings are primitive type

let w='good morning';

//length
console.log(w.length);

//substring
console.log(w.substring(0,4));

//split
let res=w.split(' ');
console.log(res);

// 1. String Concatenation
// You can concatenate strings using the + operator or template literals.
 const str1 = 'Hello';
 const str2 = 'World';
 const result = str1 + ' ' + str2; // Using +
 console.log(result); // Output: Hello World
 const name = 'Alice';
 const greeting = `Hello, ${name}!`; // Using template literals
 console.log(greeting); // Output: Hello, Alice!

//access
const str = 'Hello';
console.log(str[0]); // Output: H
console.log(str.charAt(1)); // Output: e


//substring
const st = 'Hello World';
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.substr(6, 5)); // Output: World
console.log(str.slice(6)); // Output: World

//seraching
const s = 'Hello World';
console.log(s.indexOf('o')); // Output: 4
console.log(s.lastIndexOf('o')); // Output: 7
console.log(s.startsWith('Hello')); // Output: true
console.log(s.endsWith('World')); // Output: true
console.log(s.includes('World')); // Output: true

//casing

console.log(str.toUpperCase()); // Output: HELLO WORLD
console.log(str.toLowerCase()); // Output: hello world

//Split and joining
const a = 'Hello,World';
const parts = a.split(','); // Output: ['Hello', 'World']
console.log(parts);

const arr = ['Hello', 'World'];
const joined = arr.join(' '); // Output: 'Hello World'
console.log(joined);


//trim
const x = '   Hello World   ';
console.log(x.trim()); // Output: 'Hello World'

