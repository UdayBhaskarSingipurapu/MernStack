//access head
let head=document.head;
console.log('head is:',head);

//access body
let body=document.body;
console.log('body is', body);

//access other elements
//use querySelector()
let h1=document.querySelector('h1');

 let clas = document.querySelector('.first');
 console.log(clas);

 let se=document.querySelector('#second');
 console.log(se);

//access children of a parent

 let div=document.querySelector('div');
 console.log(div);

// let parent=div.parentNode;
// console.log(parent);


//adding interavctivity

h1.addEventListener('click',()=>{
    //change styel
    h1.style.color='white';
    h1.style.backgroundColor='green';
    h1.style.fontSize='2rem';
    h1.style.textAlign='center';

    //change content
    h1.textContent='Using Mern stack';
})



//increament counter
let count=document.querySelector('.counter')
let btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
    count.textContent=Number(count.textContent)+1;
})


//create html element
let h3=document.createElement('h3');
h3.textContent='hello';
console.log(h3);
//add to DOM
//document.body.appendChild(h3)
div.appendChild(h3);


// //for of loop
// for(let el of num){
//     //create element
//     let h4=document.createElement('h4');
//     //add content
//     h4.textContent=el;
//     //add to DOM
//     document.body.appendChild(h4);
    
// }
//display array to DOM
let num=[10,20,30];

let addEle=document.querySelector('.addBtn');
addEle.addEventListener('click',()=>{
    num.push(100);
    
    displayArray();
    num.length=0;
})

function displayArray(){
    
    for(let el of num){
        //create element
        let h4=document.createElement('h4');
        //add content
        h4.textContent=el;
        //add to DOM
        document.body.appendChild(el);
        
    }
}
