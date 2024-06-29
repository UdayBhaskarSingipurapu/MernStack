//pending
//fulfilled or rejected


//create a promise
let condition=true;
const probj=new Promise((fulfilled,rejected)=>{
    if(condition===true){
        fulfilled("fulfilled");
    } else {
        rejected("rejected");
    }
})


//consume the promise

probj
.then((message)=>{
    console.log("message from then", message);
})
.catch((message)=>{
    console.log("message from catch", message);
})

//when client makes external communication we use promises.

