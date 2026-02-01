const http = require('http');
const fs = require('fs');
const querystring = require('querystring')
http.createServer((req, resp) => {
    if (req.url == '/' && req.method === 'GET') {
        fs.readFile('./html/form.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'content-type': 'text/plain' })
                resp.write('Internal Error!!!!!!1');
            }
            else {
                resp.writeHead(200, { 'content-type': 'text/html' })
                resp.write(data);
            }
            resp.end();
        })
    }
    else if (req.url == '/submit' && req.method === 'POST') {
        let body = "";
        var formData = {};
        // receive data
        req.on('data', chuck => {
            body += chuck.toString();
        })
        // data fully recived
        req.on('end', () => {
            formData = querystring.parse(body);
            console.log(formData);
            let infoData=`My name is ${formData.name} and my email is ${formData.email}`
            fs.writeFileSync('./text/'+formData.name+'.txt',infoData,'utf-8',(err)=>{
                 if(err) resp.end(err);
                 else {
                    console.log('File created ')
                 }
            })// this are the method 
            //use for the creatre file its take file path +filename+type 
            // than informetion amout file ....
            // and also after this we write 'utf-8'
            // and one callback function which give error





            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.end(`<h2>Submitted Successfully</h2>
                <p>Name: ${formData.name}</p>
                <p>Gmial: ${formData.email}</p>`);

        });




    }
}).listen(4800);


// =========================================
// querystring.parse() – FORM DATA NOTES
// =========================================

// When a form is submitted using POST method,
// Node.js receives data as a URL-encoded string.

// Example raw form data:
// name=Shubham&email=test@gmail.com&age=21

// -----------------------------------------
// WHAT IS querystring?
// -----------------------------------------
// - querystring is a built-in Node.js module
// - Used to convert URL-encoded strings into objects

// Import:
// const querystring = require('querystring');

// -----------------------------------------
// WHAT IS body?
// -----------------------------------------
// - body is a string that stores incoming form data
// - Data arrives in small pieces (chunks)
// - All chunks are combined into body

// Example:
// let body = "";

// -----------------------------------------
// WHY querystring.parse() IS USED
// -----------------------------------------
// querystring.parse(body):
// - Converts string into JavaScript object
// - Makes form data easy to access

// -----------------------------------------
// BEFORE PARSING (STRING)
// -----------------------------------------
// body =
// "name=Shubham&email=test@gmail.com&age=21"

// -----------------------------------------
// AFTER PARSING (OBJECT)
// -----------------------------------------
// const formData = querystring.parse(body);

// formData = {
//   name: "Shubham",
//   email: "test@gmail.com",
//   age: "21"
// }

// -----------------------------------------
// ACCESSING FORM DATA
// -----------------------------------------
// formData.name
// formData.email
// formData.age

// -----------------------------------------
// IMPORTANT EVENTS
// -----------------------------------------
// req.on("data") → receives data chunks
// req.on("end")  → all data received

// -----------------------------------------
// WHEN TO USE querystring.parse()
// -----------------------------------------
// - HTML form submission
// - POST request
// - Content-Type: application/x-www-form-urlencoded

// -----------------------------------------
// INTERVIEW POINT
// -----------------------------------------
// querystring.parse() converts URL-encoded
// form data into a JavaScript object.

// -----------------------------------------
// NOTE
// -----------------------------------------
// - querystring is older but still valid
// - Express handles this automatically
