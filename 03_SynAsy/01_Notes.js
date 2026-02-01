//example :- mere ko pather fekne hai me 
// Synchrones :- 
// ek pather feka aur wait ki jb vo gir gya to me 
// dubare se dusra pather feka to te synchrones ka emaxple hai

//Asyncrones :-  is more faster that than the syn prog.
     //        isme me intijar nhi kruga ki phela pather girne ka 
     // dusra pather chla duga ....

  console.log('apple1')
   setTimeout(  ()=>{
      console.log('apple2')// this is the 
  },2000);
  console.log('apple3');











// =========================================    
// SYNCHRONOUS vs ASYNCHRONOUS (JS / Node.js)
// =========================================

// -----------------------------------------
// SYNCHRONOUS (Blocking)
// -----------------------------------------
// - Code runs line by line
// - Each task waits for the previous task to finish
// - Blocks the execution

// Example:
// console.log("Start");
// console.log("Middle");
// console.log("End");

// Output:
// Start
// Middle
// End

// -----------------------------------------
// SYNCHRONOUS PROBLEM
// -----------------------------------------
// - Slow operations block the program
// - Bad for servers

// Example:
// readFileSync() blocks execution

// -----------------------------------------
// ASYNCHRONOUS (Non-Blocking)
// -----------------------------------------
// - Tasks do NOT wait
// - Long tasks run in background
// - Program continues execution

// Example:
// setTimeout(() => {
//   console.log("Async Task");
// }, 2000);

// console.log("End");

// Output:
// End
// Async Task

// -----------------------------------------
// WHY ASYNCHRONOUS IS IMPORTANT
// -----------------------------------------
// - Prevents blocking
// - Improves performance
// - Handles multiple users efficiently
// - Core of Node.js

// -----------------------------------------
// ASYNC IN NODE.JS
// -----------------------------------------
// Node.js uses:
// - Event Loop
// - Callbacks
// - Promises
// - async / await

// -----------------------------------------
// COMMON ASYNC EXAMPLES
// -----------------------------------------
// setTimeout()
// fs.readFile()
// fetch()
// API calls
// Database queries

// -----------------------------------------
// SYNC vs ASYNC (TABLE)
// -----------------------------------------
// Synchronous:
// - Blocking
// - One task at a time
// - Simple but slow

// Asynchronous:
// - Non-blocking
// - Multiple tasks together
// - Fast and efficient

// -----------------------------------------
// REAL LIFE EXAMPLE
// -----------------------------------------
// Synchronous:
// - One person uses ATM
// - Others wait in line

// Asynchronous:
// - Food order in restaurant
// - You order and do other work

// -----------------------------------------
// INTERVIEW POINT
// -----------------------------------------
// Synchronous code blocks execution,
// Asynchronous code allows non-blocking
// execution using callbacks, promises,
// or async/await.

// -----------------------------------------
// IMPORTANT NOTE
// -----------------------------------------
// JavaScript is single-threaded,
// but asynchronous behavior is achieved
// using the event loop.
