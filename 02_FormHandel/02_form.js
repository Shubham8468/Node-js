// In this File we make a html file which name is form.html 
// we access this and Display this on the browser with the help of fs 
// Than i want to access the submitted data ;
//+++++++++++++++++++++ How to data sent my Browse +++++++++++++
//When a user submits a form, data is NOT sent all at once.
// Instead, Node.js receives data in small pieces called chunks.
// 👉 Think of it like water flowing through a pipe, not a bucket dump.
// Imagine ordering a long WhatsApp voice note 🎧
// It doesn’t download fully at once
// It loads bit by bit
// After full download → you can play it


const http= require('http');
const fs= require('fs');
const { response } = require('express');
http.createServer((req,resp)=>{
    fs.readFile('./html/form.html','utf-8',(err, data)=>{
        if(err){
            resp.writeHead(500,{'content-type':'text/plain'})
            resp.end("Internal Error!!!!")
        }
        else if(req.url=='/'){
            resp.write(data)
        }
        else if(req.url=='/submit'){
            resp.writeHead(200,{'content-type':'text/html'})
            resp.write("<h2>Sumitted</h2>")
        }
         resp.end();
    })
    
   
}).listen(4800)