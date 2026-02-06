//+++++++++++++++++++++++++++++ What is middleware +++++++++++++++++++++++++++++
//👉 Middleware is a function that runs between the request and the response.
//👉 Request → Middleware → Route → Response

//jab claint server se req rkta hai to uske pahle hi middleware function run ho jata hai

//Middleware in Node.js (Express) is a function that executes during the request-response
//  cycle and can modify the request, perform logic, or terminate the request before passing
//  it to the next middleware or route handler.

// +++++++++++++++++++++++++ Middleware can:

// read the request
// modify the request
// execute logic
// decide whether to continue or stop


//+++++++++++++++++++++++++++++ Why do we use Middleware? +++++++++++++++++++++++++

// Middleware is used to:
// Log requests
// Parse data (JSON, form data)
// Authenticate users
// Serve static files
// Handle errors
// Protect routes

//+++++++++++++++++++++++++++++ Real-life Example +++++++++++++++++++++++++++


// Think of middleware like security checks at an airport ✈️
// 1. ID check
// 2. Luggage scan
// 3. Ticket verification
// 4. Boarding gate
// 5. Each step is middleware.
// If you fail one → you stop.

import express from 'express'
import path from 'path'

const app=express();
const absPath = path.resolve('./html')

// function checkRoute (req,resp,next){ // this is the simlest way to create middleware .. in that we accessing 
    // some parameters like :- req,resp and next -> this is use for the what do next ...
//     console.log(`User access to this ${req.url} page`);
//     next();
// }

// app.use(checkRoute); // this is the way to call middleware ...

//+++++++++++++++ Best method to call middleware ++++++++++++++++

 app.use((req,resp,next)=>{
       console.log(`User access to this ${req.url} page`);
       next();
 })




app.get('/',(req,resp)=>{
     resp.sendFile(absPath +'/home.html')
})

app.get('/users',(req,resp)=>{
    resp.send("<h1>User simple page</h1>")
})

app.get('/products',(req,resp)=>{
    resp.send("<h1>Products .........</h1>")
})

app.listen(4800);