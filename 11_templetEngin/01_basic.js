//+++++++++++++++++++++++++++++++ What is Temlpate Engin +++++++++++++++++++++++++++++


//A template engine allows Node.js to generate dynamic HTML by injecting server-side data into HTML templates.

//Note Point :-
               

//+++++++++++++++++++++++++++++ There are some Popular Template Engines in Node.js +++++++++++++++++++++++++++++++

// | Template Engine | 특징 (Features)            |
// | --------------- | ------------------------ |
// | **EJS**         | Simple, HTML-like syntax |
// | **Pug**         | Clean, indentation-based |
// | **Handlebars**  | Logic-less, very clean   |
// | **Mustache**    | Minimal and fast         |



import express from 'express'

const app=express();

app.set('view engine','ejs')// this is difend the templet 
app.get("/",(req,resp)=>{
    resp.render('home',{name :"shubham",course :"B.Tech",age:21}); // This is the way to inject data in HTML...
})

app.get("/login",(req,resp)=>{
    resp.render('login',{name :"Golu",age:34});
})


app.listen(4800)