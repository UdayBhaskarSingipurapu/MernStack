const exp=require('express')
const productApp=exp.Router();

let products=[
    {id:1,name:'Samsung'},
    {id:2, name:'Apple'}
]

productApp.get('/products', (req,res)=>{
    res.send({message:'all products', payload:products})
})


module.exports=productApp;