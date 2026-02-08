import express from 'express'

const app=express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended :false}))

app.get('/',(req,resp)=>{
    resp.send("<h1>Home page </h1>");
})

app.get("/add-user",(req,resp)=>{
    resp.render('addUser');
})

app.post('/submit',(req,resp)=>{
    resp.render('Submit',req.body);
})

app.get('/user',(req,resp)=>{
    const users=['shubh','pitter','adim','flash','superman','batman']

    resp.render('user',{users:users,isLogin:true})// 1st is key ....
})





app.listen(4800);