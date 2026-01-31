const fs= require('fs');
const http=require('http');
http.createServer((req,resp)=>{
  fs.readFile('loadHtmlFile/web.html','utf-8',(err,data)=>{
     if(err){
        resp.writeHead(500,{'content-type':'text/plain'})
        resp.write('Internal Server Error!!!!!!!!!!');
        resp.end();
        return 
     }
     else{
        resp.writeHead(200,{'content-type':'text/html'})
        resp.write(data);
        resp.end();
     }
  })

}).listen(4800)
