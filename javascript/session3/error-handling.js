//when error is occured the program wil terminate abnormally and remaining program will neverr executes

//in js program will execute until the 1st error occured

console.log("test-1");

try{
    console.log(a);
} catch(err){
    console.log("error is", err);
} finally{

}

console.log("test-2");
console.log("test-3");
console.log("test-4");

let d=['3'];
let d2={ ... d};
try{
    console.log(d2[10]);  //undefined
} catch(e){
    console.log("error is", e);
}