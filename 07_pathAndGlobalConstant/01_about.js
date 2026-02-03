//+++++++++++++++++++++++++++++ What is Path module and Globle constant ++++++++++++++++++++++++++++++++++

// Path module :=>
//                 The Path module is a built-in Node.js module used to handle and transform 
//                  file & directory paths in a safe, OS-independent way.
// one line :- Path module is a core Node.js module used to work with file
//             and directory paths in a cross-platform way.

// ++++++++++++++ 🔹 Why Path Module is needed? ++++++++++++++++

// To join file paths correctly
// To get file name or extension
// To convert relative paths into absolute paths
// To avoid OS compatibility issues



//+++++++++++++++++++++ Globle constant +++++++++++++++++++++++++++

// Global constants are predefined values provided by Node.js that are available 
// in every file without importing anything.

//+++++++++++++++++++++++++++ 🔹 Why they are called constants?  +++++++++++++++

// Because:
// Their values are automatically set by Node.js
// You cannot change their meaning
// They remain constant for that file



const path=require('path');
const file='./text/blue.txt';

//console.log(path.basename(file)) // this give base name of file in case its give (blue.txt)
//console.log(path.dirname(file)); /// this will return the directory of file (./text)

//console.log(path.extname(file)) //this will return the file extenstion like... pdf,text ,pvg 

//console.log(path.resolve('text','golu.txt')) // this will give all path of related to this ..



//++++++++++++++++ Global Contantes ++++++++++++++++++++++++++++

console.log(__dirname);// ye hame current directory location deta hai ..
console.log(__filename); // ye current file location deta hai 



