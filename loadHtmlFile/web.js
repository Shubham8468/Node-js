const fs= require('fs');
const http=require('http');
http.createServer((req,resp)=>{
    //fs.readFile() contains three paramenter 
    // 1. File Path
    // 2. 'utf-8' by default
    // 3. callBack Function 
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


// ==============================
// HTTP STATUS CODES (Node.js)
// ==============================

// Status codes are numbers sent by the server to tell the client
// the result of an HTTP request.

// They are used in Node.js / Express APIs to show success or error.

// --------------------------------
// STATUS CODE CATEGORIES
// --------------------------------

// 1xx → Informational (rarely used)

// 2xx → Success
// - 200 OK        → Request successful
// - 201 Created   → New resource created
// - 204 No Content→ Success but no response body

// 3xx → Redirection
// - 301 Moved Permanently
// - 302 Found

// 4xx → Client Error
// - 400 Bad Request   → Invalid input / data
// - 401 Unauthorized  → Login required
// - 403 Forbidden     → No permission
// - 404 Not Found     → Route or resource not found

// 5xx → Server Error
// - 500 Internal Server Error → Server crashed
// - 502 Bad Gateway
// - 503 Service Unavailable

// --------------------------------
// USING STATUS CODES IN EXPRESS
// --------------------------------

// Syntax:
// res.status(code).send(data)

// Examples:

// res.status(200).send("Success");
// res.status(201).json({ message: "Created" });
// res.status(404).json({ error: "Not Found" });
// res.status(500).json({ error: "Server Error" });

// --------------------------------
// MOST IMPORTANT (INTERVIEW)
// --------------------------------
// 200 → OK
// 201 → Created
// 400 → Bad Request
// 401 → Unauthorized
// 404 → Not Found
// 500 → Internal Server Error
