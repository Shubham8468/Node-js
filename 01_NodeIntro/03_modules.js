const fs= require('fs');
const os= require('os')
fs.writeFileSync('dummy.txt',"hey i am shubham from fs!!!!!!!");
console.log(os.platform());
console.log(os.hostname())
console.log(os.cpus());// so this is use for the know about our system ..
