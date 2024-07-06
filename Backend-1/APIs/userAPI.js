//create http server
   //import and use express
   //create mini-express userApp
   const exp=require('express');
   const userApp=exp.Router();



//add body parser
 userApp.use(exp.json())


let userList=[
    {id:1,name:'uday'},
    {id:2,name:'bhaskar'}
   ]




//create sample rest api(req-handler or route)
   //route fot GET
   userApp.get('/users', (req,res)=>{
    res.send({message:"users info", payload:userList})
   })
   
   //route to get single user
   userApp.get('/users/:id', (req,res)=>{      //route level middleware, only executes when req is made
        //get the id
        let idurl=Number(req.params.id);
        //search for the user by id
        let userbyId=userList.find((user) => user.id===idurl);
        //whether uer exists or not
        console.log(userbyId);
        if(userbyId===undefined){
            res.send({message:"invalid user ID"});
        }
        else {
            res.send({message:"user info", payload:userbyId});
        }
    })


   //route for post
   userApp.post('/user', (req,res)=>{
    //GET USER FROM BODY
    let newUser=req.body;
    //push to userlist
    userList.push(newUser);
    //send res
    res.send({message:"users created"})
   })


   //route for put
   userApp.put('/user', (req,res)=>{
    //get modified user obj
    let modified=req.body;
    //find index of modified user by id
    let idx=userList.findIndex((user)=> user.id===modified.id);
    //check index existed or not
    if(idx===-1){
        res.send({message:"user not found"})
    } 
    else {
        userList[idx]=modified;
        res.send({message:"user updated"})
    }
    
   })


   //route for delete
   userApp.delete('/user/:id', (req,res)=>{      //route level middleware
    //get id of user to be deleted
    let urlid=Number(req.params.id);
    //find the user id index
    let index=userList.findIndex((user)=> user.id===urlid);
    //check index exists or not
    if(index===-1){
        res.send({message:"user not found"});
    }
    else {
        userList.splice(index,1);
        res.send({message:"user deleted"});
    }
    res.send({message:"user deleted"})
   })

//export this module
module.exports=userApp;