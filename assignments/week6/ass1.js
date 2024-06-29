 let n1;
 n=prompt("enter size of array: ");
 let arr=[n];
 for(let i=0;i<n;i++){
     arr[i] = prompt("enter array elements:");
 }
 let sum=0;
 for(let i=0;i<arr.length;i++){
 
     sum+=parseInt(arr[i]);
  }
 console.log("sum of array elements is: ", sum);


//2nd program

 let n2;
 n2=parseInt(prompt("enter array size:"));
 let a=[n2];
    for(let i=0;i<n2;i++){
        a[i]=parseInt(prompt("enter array elements:"));
    }
    console.log("even number in the array are: ");
    for(let i=0;i<n2;i++){
        if(a[i]%2==0){
         console.log(a[i]);
        }
 }

//3rd program

let n3;
n3=parseInt(prompt("enter array size:"));
let b=[n3];
for(let i=0;i<n3;i++){
    b[i]=parseInt(prompt("enter array elements:"));
}
console.log("prime numbers in the array are:");
let flag=0;
for(let i=0;i<n3;i++){
    if(b[i]!=1){
        for(let j=2;j<=Math.sqrt(b[i]);j++){
            if(b[i]%j==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
            console.log(b[i]);
        }
    }
    flag=0;
}