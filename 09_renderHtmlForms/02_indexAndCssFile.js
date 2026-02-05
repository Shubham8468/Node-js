import express from 'express'
import path from 'path';
const app= express();

//++++++++++++++++ how to get absolute path ++++++++++++++++++++
// if i use commanjs in case i use __dirname to find absolute path 




//++++++++++++++++ How to load Css File in Express ++++++++++++++++++++

//++++++++++++++++++++++++ app.use(express.static(cssPath)) — what does static mean? +++++++++++++++++++

// 🔹 express.static() is a built-in middleware in Express.
// Difination :=>
//               express.static() is middleware used to serve static files like CSS, images,
//               and JS directly to the browser without creating routes for each file.
// It is used to serve static files such as:
// CSS files
// Images
// JavaScript files
// Fonts
// PDFs
// 👉 Static files = files that don’t change on the server (no logic, no processing).

//+++++++++++++++++++++++++++++ Why do we need express.static()? ++++++++++++++++++++++++++++++++


// When you use Express, the server does NOT automatically send CSS, images, or JS to the browser.
// So if your HTML has

 // <link rel="stylesheet" href="/css/about.css">
   
 // The browser will ask the server:   GET /css/about.css
  

//  Without express.static(), Express says:
// ❌ I don’t know this file

// With express.static(), Express says:
// ✅ Yes, here is the file







const cssPath=path.resolve('public')

app.use(express.static(cssPath))
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
// this method handel multipal case like 404 raout, midllwhere etc
app.use((req,resp)=>{
    const notFound=path.resolve('./html/404_page.html')
    resp.status(404).sendFile(notFound);
})

app.listen(4800);
