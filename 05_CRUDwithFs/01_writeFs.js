const fs= require('fs');
//fs.writeFileSync('./text/newfile.txt',"this is a file"); this is the way to create a file ..

//++++++++++++++++++++ How to delete a file +++++++++++++++++++++++
//fs.unlinkSync('./text/newfile.txt')  


//+++++++++++++++++++++ How to read file +++++++++++++++++++++++++++++

//const data = fs.readFileSync('./text/golu.txt','utf-8');
//console.log(data);

//++++++++++++++++++ How to update a file ++++++++++++++++++++++\

fs.appendFileSync('./text/golu.txt','hey i am from CRUD file ');