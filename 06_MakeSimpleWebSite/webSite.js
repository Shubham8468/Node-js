const http = require('http');
const fs = require('fs');
http.createServer((req, resp) => {

    if (req.url == '/') {
        let navbar;
        fs.readFile('./06_MakeSimpleWebSite/navbar.html','utf-8',(err,data)=>{
               if(err){
                resp.writeHead(500,{'content-type':'text/plain'});
                resp.end("Header File not found")
               }
               else{
                navbar=data;
               }
        })
        fs.readFile('./06_MakeSimpleWebSite/home.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(404, { 'content-type': 'text/plain' });
                resp.end("Internal Server Error!!!!")
            }
            resp.writeHead(200,{'content-type':'text/html'})
            resp.write(navbar+""+ data);
            resp.end();
        });
    }
    else if(req.url=='/style.css'){
        fs.readFile('./06_MakeSimpleWebSite/style.css','utf-8',(err ,data)=>{
            if(err){
                resp.writeHead(500,{'content-type':'text/plain'});
                resp.end('CSS File not found!!!!!')
            }
            else{
                resp.writeHead(200,{'content-type':'text/css'})
                resp.end(data);
            }
        })

    }


}).listen(4800);