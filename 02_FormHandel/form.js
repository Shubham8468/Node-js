const http=require('http');
http.createServer((req,resp)=>{
    console.log(req.url)
    if(req.url=='/'){
   resp.writeHead(200,{'content-type':'text/html'})
   resp.write( `<form action='/submit' method='post' >
    <input placeholder='Name' type='text' name='name'></input>
    <input placeholder='Email' type='email' name='email'></input>
    <button>Submit</button>
   </form>`);
    }
    else if(req.url=='/submit'){
        resp.write(`<h1>Data submit succesfull!!!!</h1>`)
    }
   resp.end();
}).listen(4800)