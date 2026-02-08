// ==============================
// External Middleware in Express.js
// ==============================

// Definition:
// External middleware in Express.js are third-party middleware functions
// that are not built into Express. They are installed using npm and used
// to add extra functionality like logging, security, request parsing,
// authentication, etc.

// Why External Middleware is Used:
// - Saves development time
// - Provides well-tested and optimized solutions
// - Improves security and performance
// - Keeps code clean and modular

// How External Middleware Works:
// - Executes between client request and server response
// - Can access and modify req and res objects
// - Can end the request-response cycle
// - Uses next() to pass control to the next middleware

// Common External Middleware:
// - body-parser → Parses request body
// - cors → Enables Cross-Origin Resource Sharing
// - morgan → Logs HTTP requests
// - helmet → Adds security headers
// - cookie-parser → Parses cookies
// - multer → Handles file uploads

// Example: Using External Middleware (Morgan)

// Step 1: Install
// npm install morgan

// Step 2: Use in Express App

// const express = require("express");
// const morgan = require("morgan");

// const app = express();

// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// app.listen(3000);

// Types of Middleware in Express.js:
// 1. Built-in Middleware
//    Example: express.json(), express.urlencoded()

// 2. External Middleware
//    Example: morgan, cors, helmet

// 3. Custom Middleware
//    Example:
//    function logger(req, res, next) {
//      console.log("Request received");
//      next();
//    }

// One-Line Interview Answer:
// External middleware in Express.js are third-party npm packages
// used to add additional functionality such as logging, security,
// and request handling in Express applications.

// ==============================






import express from 'express'
const app=express();
import morgan from 'morgan'//Morgan helps developers log and monitor HTTP requests, 
// making debugging, performance analysis, and error tracking easier.
//It records details such as request method, URL, status
// code, response time, and content length.


app.use(morgan('dev')) // GET / 304 2.897 ms - -   it give this like output


app.get('/',(req,resp)=>{
  resp.send("<h1>Home Page</h1>");

})

app.get('/users',(req,resp)=>{
  resp.send("<h1>login </h1>")
})

app.listen(4800);



