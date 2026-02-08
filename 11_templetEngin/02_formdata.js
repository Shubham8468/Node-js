
import express from 'express'
// i THis i create a ejs file which name is adduser i this create some input tag , i want to when user fill this form
// and submit that ..

// In this is i also create a submit form which are display user name user email and user age ..

// so that i use middleware ....


const app=express();


app.use(express.urlencoded({extended : false}))
app.set("view engine",'ejs')
app.get('/add-user' ,(req,resp)=>{
    resp.render('addUser')
     
})

app.post("/submit",(req,resp)=>{
   
  resp.render('Submit',req.body)// here we pass req body in ejs file which name is Submit 
})






app.listen(4800);

