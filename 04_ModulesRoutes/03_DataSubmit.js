 const fs= require('fs');
 const querystring=require('querystring')
 function submission(req,resp){
    if(req.url=='/submit'){
        let body='';
       req.on('data',chuck=>{
        body+=chuck.toString();
       })

       req.on('end',()=>{
         const maindata= querystring.parse(body);
         console.log(maindata);
         let infoData=`MY First Name is ${maindata.firstName} and lastName is ${maindata. lastName} . Email = ${maindata.email}`
        fs.writeFileSync('./04_ModulesRoutes/UserData/'+maindata.firstName+'.txt',infoData,'utf-8',(err)=>{
               if(err){
                resp.end(err);
               }
               console.log('File Created Successfully!!!!!!!1');
        })
         resp.writeHead(200,{'content-type':'text/html'})
        resp.end('<h1>summited</h1>');
       })

    }
}

module.exports=submission;