const fs= require('fs');
const os= require('os')
fs.writeFileSync('dummy.txt',"hey i am shubham from fs!!!!!!!");// this is the way to how to create a file is fs 
console.log(os.platform());
console.log(os.hostname())
console.log(os.cpus());// so this is use for the know about our system ..


//+++++++++++ what is objects and Module ++++++++++++++++++++

// Globle Object is an object that is available in all modules by defult ...
// You do not need to import or require it to use it ..