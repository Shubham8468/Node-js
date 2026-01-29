
const http= require('http');
http.createServer((req,resp)=>{
    // console.log(req.url); runs on the server and prints output to the server console. Your
    //  Node.js server runs on the backend (server-side), not in the browser.
   if(req.url=='/'){
    resp.write('<h1>Home page</h1>')
   }
   else if(req.url =='/login'){
    resp.write("<h1>Logging Page</h1>")
   }
   else{
    resp.write("<h1>Other Page!!!</h1>")
   }
    resp.end();
}).listen(4800);
