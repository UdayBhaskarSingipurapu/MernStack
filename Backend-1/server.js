//create http server
   //import and use express
   const exp=require('express');
   const app=exp();
//import mongodb
const {MongoClient}=require('mongodb')
let mClient=new MongoClient('mongodb://127.0.0.1:27017')

//conect database
mClient.connect()
 .then(()=>{ console.log("connection success")
   app.listen(4000,()=> console.log("http server created onn prot 4000"));
})
 .catch(()=>console.log("can't connect"))

//import userapi
let userApp=require('./APIs/userAPI')
let productApp=require('./APIs/productsAPI')

//if path starts with user-api then pass it to userApp
app.use("/user-api", userApp);
app.use("/products-api", productApp);

// middlewares

// const middleware1=(res,req,next)=>{
//      console.log('middleware1 executed');
//      next();  //if this middleware executed successfully then it will pass to next one
//      //res.send({message:"response"}); midlewares also can send response back to client
// }
// const middleware2=(res,req,next)=>{
//     console.log('middleware2 executed');
//     next();  //if this middleware executed successfully then it will pass to next one
//     //res.send({message:"response"}); midlewares also can send response back to client
// }


// we should call the middlewares. These are application level middlewares
//app.use(middleware1);
// app.use(middleware2)

