const http= require('http');
const userData=[
    {
        name:"shubham",
        age:21,
        email:"shubb@test.com"
    },
    {
        name:'sam',
        age:23,
        email:"sam@test.com"
    },
    {
        name:'peter',
        age:25,
        email:'peter@test.com'

    }
]
http.createServer((req,resp)=>{
    resp.setHeader('Content-Type','application/json')// this is the tell the browse to display this types of content on
resp.write(JSON.stringify(userData));
resp.end();
}).listen(4800)

//+++++++++++++++++++++++++++++++++++++++++ JSON.stringfy() +++++++++++++++++++++++
// JSON.stringify() converts JavaScript objects into JSON strings so they can be sent over the network,
//  stored in files, or saved in databases in Node.js.