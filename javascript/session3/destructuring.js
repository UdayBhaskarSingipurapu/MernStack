//packing
 let usernames=['ravi', 'madhu', 'seetha'];

//unpacking
let [u1,u2,u3]=usernames;
//let [u1,,u3] ignoring 2nd element

console.log(u1);
console.log(u2);
console.log(u3);


//for object

let p={
    id:100,
    name:'tv',
    brand:'sony'
}

//unpacking

let{id,name,brand}=p;

console.log(id);
console.log(name);
console.log(brand);