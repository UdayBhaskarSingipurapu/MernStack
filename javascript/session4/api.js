//Application Programming Interface

//contact API

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')  //returns the promise
    .then(res=>res.json())
    .then(posts=>console.table(posts))
    
    .catch(err=>console.log(err))
}

getPosts();


//async and await
async function getposts1(){
    try {
      let res1 =  await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await res1.json();
      console.log(data);
      
    }
    catch(err) {  console.log(err); }
}
getposts1();


