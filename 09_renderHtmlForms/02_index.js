import express from 'express'
import path from 'path';
const app= express();

//++++++++++++++++ how to get absolute path ++++++++++++++++++++
// if i use commanjs in case i use __dirname to find absolute path 

app.get('/',(req,resp)=>{
    const absPath = path.resolve('./html/home.html')
    //console.log(absPath)//.\09_renderHtmlForms\02_index.js`    its give absolute path 
    // isko  path must be absolute  chahiye pura path 
  resp.sendFile(absPath) 
})
app.get('/login',(req,resp)=>{
    const absolute=path.resolve('./html/login.html')
   resp.sendFile(absolute);
})
app.post('/submit',(req,resp)=>{
    resp.send("<h1>Login SuccessFull !!!</h1>")
})
app.get('/about',(req,resp)=>{
    const aboutPath=path.resolve('./html/about.html')
    resp.sendFile(aboutPath);

})
// this method handel multipal case like 404 , midllwhere etc
app.use((req,resp)=>{
    const notFound=path.resolve('./html/404_page.html')
    resp.status(404).sendFile(notFound);
})

app.listen(4800);