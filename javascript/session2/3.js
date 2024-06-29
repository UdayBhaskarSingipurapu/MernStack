//array

let arr=['ravi', 'suresh'];
//read element
console.log(arr[0]);
console.log(arr[1]);

let a=[1,2,3,4,5,6];
let sum=0;
for(let i=0;i<a.length;i++){
    sum+=a[i];
}
console.log(sum);

//inserting elements
   //at start
     arr.unshift('bhanu');
     console.log(arr);
    //at end
     arr.push('vikas');
     console.log(arr);

    //in between
    arr.splice(2,0,'test');
    console.log(arr);
    arr.splice(3,0,'uday');
    console.log(arr);


//deletion
  //at start
   arr.shift();
   console.log(arr);
  //at end
    arr.pop();
    console.log(arr);

  //in between
    arr.splice(3,1);
    console.log(arr);

//modification
  arr.splice(2,1,'hello');
  console.log(arr);