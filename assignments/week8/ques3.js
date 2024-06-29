const form=document.querySelector('form');
let first=form.children[1];
let second=form.children[4];
let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');
let btn4=document.querySelector('.btn4');
let h2=document.querySelector('.result')

btn1.addEventListener('click', (event)=>{
    event.preventDefault();
    let n1=Number(first.value);
    let n2=Number(second.value);
    
    h2.innerHTML='Result :';
    let sum=n1+n2;
    let y=document.createElement('h3');
    y.textContent=sum;
    h2.appendChild(y);

});

btn2.addEventListener('click', (event)=>{
    event.preventDefault();
    h2.innerHTML='Result :';
    let n1=Number(first.value);
    let n2=Number(second.value);
    let sum=n1-n2;
    let y=document.createElement('h3');
    y.textContent=sum;
    h2.appendChild(y);

});

btn3.addEventListener('click', (event)=>{
    event.preventDefault();
    h2.innerHTML='Result :';
    let n1=Number(first.value);
    let n2=Number(second.value);
    let sum=n1*n2;
    let y=document.createElement('h3');
    y.textContent=sum;
    h2.appendChild(y);

})
btn4.addEventListener('click', (event)=>{
    event.preventDefault();
    h2.innerHTML='Result :';
    let n1=Number(first.value);
    let n2=Number(second.value);
    let sum=n1/n2;
    let y=document.createElement('h3');
    y.textContent=sum;
    h2.appendChild(y);

})