//create http server
   //import and use express
   const exp=require('express');
   const app=exp();

   //add body parser
   app.use(exp.json())

   //test data
   let userList=[
    {id:1,name:'uday'},
    {id:2,name:'bhaskar'}
   ]

//create sample rest api(req-handler or route)
   //route fot GET
   app.get('/users', (req,res)=>{
    res.send({message:"users info", payload:userList})
   })
   
   //route to get single user
   app.get('/users/:id', (req,res)=>{
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
   app.post('/user', (req,res)=>{
    //GET USER FROM BODY
    let newUser=req.body;
    //push to userlist
    userList.push(newUser);
    //send res
    res.send({message:"users created"})
   })

   //route for put
   app.put('/user', (req,res)=>{
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
   app.delete('/user/:id', (req,res)=>{
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



   //assign port num to http server of express app
   app.listen(4000,()=> console.log("http server created onn prot 4000"));