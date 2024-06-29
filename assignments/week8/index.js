
async function getTodo(){
    try {
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await res.json();
    console.table(data);
    console.log(data);
    }
    catch(err) {console.log(err);}
}
getTodo();