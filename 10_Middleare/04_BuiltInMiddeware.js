// In Node.js (Express), built-in middleware are the middleware functions that come pre-packaged with Express.
// You don’t need to install anything extra to use them 👍

// They help handle common tasks like serving static files,( reading request bodies,) etc.


import express from 'express'
import path from 'path'

const app=express();

//+++++++++++++ Build In Midd +++++++++++++++++
//1. this one is use for the handle html page and get data 
app.use(express.urlencoded({extended:false})) // this is build in midd that handel html page input 

// 2.  Now this one the use for the load css file .....
const cssPath=path.resolve('./public')
app.use(express.static(cssPath))



app.get('/',(req,resp)=>{
    resp.send("<h1>Home page</h1>")
})

app.get('/login',(req,resp)=>{
    const absolute=path.resolve('./html/form.html')
       resp.sendFile(absolute);
})

app.post('/submit',(req,resp)=>{
// Now i want to see the form data which are filled my user 
// if i not use midd its give undefined ....

    console.log(req.body);
   resp.send('<h1> submitted</h1>')
  
})

app.get('/about',(req,resp)=>{
   const aboutPath= path.resolve('./html/about.html');
   resp.sendFile(aboutPath);
})

app.use((req,resp)=>{
    const opsPath=path.resolve("./html/404_page.html");
    resp.sendFile(opsPath);
})

app.listen(4800);

