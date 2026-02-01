const fs=require('fs');

let operation=process.argv[2];
if(operation=='write'){
    let fileName=process.argv[3];
    let data=process.argv[4];
    console.log(operation,fileName,data)
    fs.writeFileSync('./text/'+fileName+'.txt',data,'utf-8',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file creatated!!!!!!!!!!!!!!');
    });
    
}