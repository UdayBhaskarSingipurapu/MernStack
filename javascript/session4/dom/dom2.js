const form=document.querySelector('form')

let h1=document.querySelector('.result')

let firstInput=form.children[0];
let secondInput=form.children[1];
let res=form.children[2];

form.addEventListener("submit",(event)=>{
    //prevent from refreshing
    event.preventDefault();
    //read input values
    let n1=Number(firstInput.value)
    let n2=Number(secondInput.value)
    //find sum
    let sum1=n1+n2;
    //append to body
    h1.textContent=sum1;
})