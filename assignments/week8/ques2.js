const form=document.querySelector('form');

let num=form.children[0];
let button=document.querySelector('.btn')
let h2=document.querySelector('.result');



button.addEventListener("click",(event)=>{
    event.preventDefault();
    let n=Number(num.value);
    let x=factors(n);
    console.log(x);
    for(el of x){
        let y=document.createElement('h4')
        y.textContent=el;
        h2.appendChild(y);
    }
    
});
let ar=[];
function factors(a){
    
    for(let i=1;i<=a;i++){
        if(a%i==0)
            ar.push(i);
    }
    return ar;
}