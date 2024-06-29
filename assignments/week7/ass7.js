let str='aaaabbababababbbbabababaaaa';
let acount=0,bcount=0;
for(let i=0;i<str.length;i++){
    if(str.charAt(i)=='a'){
        acount++;
    }
    else {
        bcount++;
    }
}
console.log("frequency of a:", acount);
console.log("frequency of b:", bcount);


//2nd program;

function countString(str1){
    let a=str1.split(' ');
    return a.length;
}
let str1='how are you all';
let res=countString(str1);
console.log("length of string is:", res);