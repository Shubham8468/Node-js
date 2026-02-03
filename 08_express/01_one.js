//+++++++++++++++++++++++++++++  What is Express.js? 🤔  +++++++++++++++

// Express.js is a framework of Node.js.
// 👉 In simple words:  express.js is a web application for node.js .it simplifies bulding web server and Apis in Node 
// Node.js lets you run JavaScript on the server
// Express.js makes building servers and APIs very easy

//++++++++++++++++++++++++++++ Why we use Express.js  ++++++++++++++++++++++++++

// Without Express, Node.js code becomes long and complex.
// Express helps to:
// Create a server easily 🚀
// Handle routes like /, /login, /about
// Send responses (text, JSON, HTML)
// Build REST APIs (used with React, Angular, etc.)
// Real-life example 🏠
// Think of:
// Node.js = Kitchen
// Express.js = Chef who cooks fast & neatly















const express=require('express'); // this will not be exicutebal so that i use a const variable and store its 

const app=express(); // use express with function brasese

app.get('',(req,resp)=>{
    resp.send('<h1>Basic Node js examples</h1>')
})

app.get('/about',(req,resp)=>{
   resp.send("<h1>Hello this is about page</h1>")
})

app.listen(4800);

