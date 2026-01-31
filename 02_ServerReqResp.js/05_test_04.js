const http= require('http');
const arg= process.argv;

    const portid=arg[2];
http.createServer((req,resp)=>{
    
    resp.write("testing input cmd on the posrt "+portid)
    resp.end();

}).listen(portid)