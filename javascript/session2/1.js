


let a=10;
function getValue(val){
    let b=val;
    return function findSum(){
        let sum=a+b;
        return sum;
    }
}

let res=getValue(20);
let sum=res();
console.log("sum:",sum);