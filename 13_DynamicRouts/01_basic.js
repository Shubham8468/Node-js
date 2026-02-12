//+++++++++++++++++++++++++ What is Dynamic Routes +++++++++++++++++++++++++++++++++++++++++

// Dynamic Routes in Node.js are routes where part of the URL changes dynamically and is captured as a parameter.
// They’re mainly used to handle multiple similar requests with one route.

//+++++++++++++++++++++ Why dynamic routes are used +++++++++++++++++
 //Instead of creating many routes like:
                                    //      /user/1
                                    //     /user/2
                                    //    /user/3

import express from 'express'
const app= express();
app.get('/',(req,resp)=>{
    const MCU=['Ironman','thor','loki','hulk','CaptainAmrica'];
    let data = `<ul>`
    for(let i=0;i<MCU.length;i++ ){
       data += `<li><a href="user/${MCU[i]}">${MCU[i]}</a></li>`
         console.log(MCU[i]);
    }
    data += `</li>`
    resp.send(data)
})
//++++++++++++++ How to create Dynamic Route ++++++++++++++++++
app.get('/user/:name',(req,resp)=>{
    const userName=req.params.name; // this is use for the collect Dynamic like data 
    //Importent params. jo hm :hoga vahi likhenge 
    console.log(userName)
    resp.send(`<h1>Login user Name : ${userName}</h1>`)
})
app.listen(4800);
