import express from 'express'

const app= express();
// this is the middleware here we check use age is 18 or less throught the url 
app.use((req,resp,next)=>{
    if(!req.query.age || req.query.age < 18){
        resp.send("<h1>Your Age is less than 18 , So that you can not access this page!!!! </h1>")
    }
    else{
        next();
    }
})


app.get('/',(req,resp)=>{
    resp.send("<h1> Home Page </h1>")
})

app.get('/login',(req,resp)=>{
    resp.send("<h1>Login Page </h1>")
})

app.get('/admin',(req,resp)=>{
    resp.send("<h1> Admin Page</h1>")
})

app.listen(4800);
