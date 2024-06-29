//primitives

let data=10;

//create copy

let copy=10;

console.log("data :", data);
console.log("copy :", copy);

data=200;

console.log("data :", data);
console.log("copy :", copy);

let test={
    a:10,
    b:20
}

let testcopy=test;

console.log("test:", test);
console.log("testcopy:", testcopy);

test.a=12;

console.log("test:", test);
console.log("testcopy:", testcopy);

//spread operator

let testcopy2 = { ... test}


test.a=123;

console.log("test:", test);
console.log("testcopy2:", testcopy2);