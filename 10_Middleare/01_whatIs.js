//+++++++++++++++++++++++++++++ What is middleware +++++++++++++++++++++++++++++
//👉 Middleware is a function that runs between the request and the response.
//👉 Request → Middleware → Route → Response

//jab claint server se req rkta hai to uske pahle hi middleware function run ho jata hai

//Middleware in Node.js (Express) is a function that executes during the request-response
//  cycle and can modify the request, perform logic, or terminate the request before passing
//  it to the next middleware or route handler.

// +++++++++++++++++++++++++ Middleware can:

// read the request
// modify the request
// execute logic
// decide whether to continue or stop


//+++++++++++++++++++++++++++++ Why do we use Middleware? +++++++++++++++++++++++++

// Middleware is used to:
// Log requests
// Parse data (JSON, form data)
// Authenticate users
// Serve static files
// Handle errors
// Protect routes