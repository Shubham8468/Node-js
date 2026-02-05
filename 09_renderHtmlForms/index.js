import express from 'express'
import login from '../Pages/login.js';
import submit from '../Pages/submit.js';
import home from '../Pages/home.js';
const app=express();

app.get('/',(req,resp)=>{
    resp.send(home())
})

app.get('/login',(req,resp)=>{
    // yaha pe hm post method accepte kr rhe hai to .. resp.post krna pdega 
   resp.send(login())
})

app.post('/submit',(req,resp)=>{
    resp.end(submit())
})

app.listen(4800)