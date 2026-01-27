//+++++++++++++++++++++++ Intriduction of Node js+++++++++++++++++++++++++++



//Intially , Js was used in Frontend only. To enhance UI and interaction on website (ie Button, Dynamic Colore , popup)
// but Nodejs 
//open source 
//Server side 
// JavaScript
// Runtime Enviroment - that allow to run js code in the server
// Node js allow devloper to use same language in frontend and Backend
// i.e Client side 
//     Server side


//++++++++++++++++++ What is Module in Node js ++++++++++++++++++++++++++++++++++

// Module in Node.js:
//                    A module is a reusable block of code in a separate file that can be
//                    imported and used in other Node.js files.

//++++++++++++++++++++++++++++++++++Why do we use modules?+++++++++++++++++++++++++

// Modules help to:

// ✅ Organize code properly
// ✅ Reuse code (no copy-paste 😄)
// ✅ Keep code clean and maintainable
// ✅ Avoid variable name conflicts


// ## Types of Modules in Node.js

// There are three main types of modules in Node.js:

// 1. Core (Built-in) Modules
// 2. Local (Coustom) Modules
// 3. Third-Party Modules

// ---

// ## 1. Core (Built-in) Modules

// Core modules are already provided by Node.js.
// No installation is required.

// Common core modules:
// - fs (File System)
// - http
// - path
// - os
// - events

// Example:

// const fs = require("fs");

// fs.writeFileSync("demo.txt", "Hello Node.js");

// ---

// ## 2. Local (Coustom) Modules

// Local modules are created by the developer.
// They are stored in separate files and imported when needed.

// Example:

// math.js

// function add(a, b) {
//   return a + b;
// }

// module.exports = add;

// app.js

// const add = require("./math");

// console.log(add(10, 20));

// ---

// ## 3. Third-Party Modules

// Third-party modules are external libraries installed using npm.

// Installation:

// npm install express

// Usage:

// const express = require("express");

// ---

// ## How Modules Work Internally

// Node.js uses the CommonJS module system.

// Important keywords:
// - require()       → used to import a module
// - module.exports  → used to export a module

// Every file in Node.js is wrapped inside a function automatically, which keeps variables private.

// ---

// ## Exporting Multiple Values

// math.js

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;

// module.exports = { add, sub };

// app.js

// const { add, sub } = require("./math");

// console.log(add(5, 3));
// console.log(sub(5, 3));

// ---

// ## ES Modules (Modern Syntax)

// Node.js also supports ES Modules.

// Export:

// export const add = (a, b) => a + b;

// Import:

// import { add } from "./math.js";

// To use ES Modules:
// - Use .mjs file extension
// OR
// - Add "type": "module" in package.json

// ---

// ## CommonJS vs ES Modules

// CommonJS:
// - Uses require() and module.exports
// - Default in Node.js
// - Synchronous loading

// ES Modules:
// - Uses import and export
// - Modern JavaScript standard
// - Supports asynchronous loading

// ---

// ## One-Line Definition

// A module in Node.js is a reusable piece of code written in a separate file that can be imported into other files.

// ---

// ## Key Points to Remember

// - Each file is a module
// - require() is used to import modules
// - module.exports is used to export modules
// - Node.js supports both CommonJS and ES Modules

// ---

// ## End of Notes