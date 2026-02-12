import express from "express"
import userData from './users.json' with {type:'json'} // this is the method to export json file in js folder
const app=express();
app.get('/',(req,resp)=>{
    console.log(userData)
    resp.send(userData)

})
app.get('/user/:id',(req,resp)=>{
    const id=req.params.id;
    let filterData=userData.filter((user)=>(user.id==id))// filter the data based on id 
    resp.send(filterData);
})
app.get('/userName/:name',(req,resp)=>{
    const name=req.params.name;
    let userName=userData.filter((user)=>(user.name.toLowerCase() ==name.toLowerCase()));
    resp.send(userName);
})
app.listen(4800);
