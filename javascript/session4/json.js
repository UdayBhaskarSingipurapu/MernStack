//Javascript object notation

//js obj 
let person ={
    id:100,
    name:'uday',
    age:20
}

//JSON

let person1 = {
     "id":100,
     "name":"uday",
     "age":20
 }

//difference b/w js obj and json is..every key of json is quoted in "".
//next diff is value of json is string then string is quoted in"..where in js we can us ""or ''.

//transform person obj to json:

let person2=JSON.stringify(person)
console.log(person2);

//JSON to JS obj

let jsobj=JSON.parse('{"id":100,"name":"uday","age":21}')
console.log(jsobj);