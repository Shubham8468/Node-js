import { error } from 'console';
import express, { response } from 'express'
import path from 'path';

const app=express();

const htmlFilePath=path.resolve('./html')
const cssPath=path.resolve('public')
app.use(express.static(cssPath))

// Routes go FIRST
app.get('/',(req,resp)=>{
    resp.send("<h1>Home page</h1>")
})

app.get('/users',(req,resp)=>{
    resp.send3("<h1>User Page </h1>")
})

// Route that throws an error to test error middleware
// 404 Handler - catches requests that don't match any route (3 params)
// app.use((req, resp, next) => {
//     resp.status(404).send("<h1>404 - Page Not Found</h1>");
// });

// Error Handling Middleware - catches errors from next(err) (4 params)

//++++++++++++++++++++++++++ Error Handler ++++++++++++++++++++++++++++++++++++++++++++++++++

//Error-handling middleware in Express is a special middleware with four parameters 
// used to catch and handle application errors centrally.   
// in this midd we pass error,req,resp,next   


app.use((error,req,resp,next)=>{
     resp.status(error.status || 500).sendFile(htmlFilePath+'/error.html')
    
});

app.listen(4800);