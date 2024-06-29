//import fs module
//fs is a core module
const fs=require('fs')

//using fs
   //read file content. It has 2 versions
   // 1.readfileSync it is a synchronous file
   // 2.readfile it is a asynchronous file
   fs.readFile('./sample.txt', (err,data)=>{       //2 params path of file and call back fn
      if(err){
        console.log("something went wrong", err);
      }
      else {
        console.log(data.toString());   // if we dont use toString() method it will give ascii values
      }
   })  

   //write content into file
     // 1.writefileSync it is a synchronous file
     // 2.writefile it is a asynchronous file
     fs.writeFile('sample.txt', ' new information', (err)=>{   //3 params path, info to write and call back fn
        if(err){
            console.log('error occured', err);
        }
        else {
            console.log('write completed');
        }
     })
     //if write file is used then the previous info in the file will be lost ie new ifo replaces old info
     //to solove it we can use append file

     fs.appendFile('./sample.txt', ' another new info', (err)=>{
        if(err){
            console.log('error occured', err);
        }
        else {
            console.log('write completed');
        }
     })