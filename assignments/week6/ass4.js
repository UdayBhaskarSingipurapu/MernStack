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

 let ar=[1,2,3,4,5,6];
 let i=0;
 let res=ar.map((ele,ind)=>{
  
     return ele+((ind+1)*10);
 })
 console.log(res);

 let a= [
    {
        name:"ravi",
        marks :{
            maths: 89,
            physics : 70,
            chemistry :88
        }
    },
    {
        name:"bhanu",
        marks :{
            maths: 98,
            physics : 50,
            chemistry :68
        }
    },
    {
        name:"kiran",
        marks :{
            maths: 50,
            physics : 82,
            chemistry :94
        }
    },
]

let result=a.reduce((acc,ele)=>{
    if(acc.marks.chemistry>ele.marks.chemistry) return acc
    else return ele
})

let result1=a.reduce((acc,ele)=>{
    if(acc.marks.maths>ele.marks.maths) return acc
    else return ele
})

let result2=a.reduce((acc,ele)=>{
    if(acc.marks.physics>ele.marks.physics) return acc
    else return ele
})

console.log(result1.name,'scored highest in maths')
console.log(result2.name,'scored highest in physics')
console.log(result.name,'scored highest in chemistry')