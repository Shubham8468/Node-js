const fs= require('fs');
const DataSubmit=require('./03_DataSubmit');
function userForm(req,resp){
 if(req.url=='/'){
    fs.readFile('./04_ModulesRoutes/form.htm','utf-8',(err,data)=>{
         if(err){
            resp.writeHead(500,{'content-type':'text/plain'});
            resp.write('Internal Error');
            resp.end();
            return;
         }
         resp.writeHead(200,{'content-Type':'text/html'});
         resp.write(data);
         resp.end();
    })

 }
 else{
    DataSubmit(req,resp);
 }
 
}
module.exports=userForm;