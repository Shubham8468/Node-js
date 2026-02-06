//+++++++++++++++++++++++++ What is Rout Middleware ++++++++++++++++++++++++
// yase middleware jo specific Rout ke uper apply kiye ja sakte hai vo raout middleware hote hai 
// with the help of  Rout midd we apply on specefic routes only 

//Difinations :-
            //  Route middleware in Node.js (Express) is a function that executes for a specific route before sending the response,
            //  commonly used for authentication, validation, and access control.

import express from 'express'

const app=express();


function checkRouteMiddleware(req,resp,next){
    if(!req.query.age || req.query.age <18){  // query is the data which are pass inside the url its called query
        resp.send("<h1>This site are restricted for  childrens </h1>")
    }
    else{
        next();
    }
}

function checkURL(req,resp,next){
    console.log(`this check url is ${req.url}`);
    next()

}

app.get('/',(req,resp)=>{
    resp.send("<h1>Home page</h1>")
})

app.get('/login',checkURL,(req,resp)=>{
    resp.send("<h1>Login page</h1>")
})


app.get('/users',checkRouteMiddleware,(req,resp)=>{// here we apply middleware inside the user routes
    resp.send("<h1>User page</h1>")
})

app.get('/products',(req,resp)=>{
    resp.send("<h1>Products page</h1>")
})


app.listen(4800);