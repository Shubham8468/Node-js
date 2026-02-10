//+++++++++++++++++++++++++++++++++++++++++ What is MVC  ++++++++++++++++++

// MVC (Model–View–Controller) architecture is used to organize an application’s code by separating concerns.
// Its main goal is to make applications cleaner, easier to maintain, test, and scale.

//++++++++++++++++++++++++++++ What is MVC used for? ++++++++++++++++++++


// MVC is mainly used in web applications, desktop apps, and mobile apps to:
// Separate business logic from UI
// Make code reusable
// Allow multiple developers to work independently
// Simplify debugging and testing



// ++++++++++ 1️⃣ Model

// Handles data and business logic

// Talks to the database

// Example:

// User data

// Product price calculation

// 👉 Does NOT care how data is shown

//+++++++++++++++++++++  2️⃣ View

// Handles UI (User Interface)

// Displays data to the user

// Example:

// HTML pages

// Forms

// Buttons

//iske inder vo chije hogi jo user to display hogi 

// 👉 Does NOT contain business logic


// ++++++++++++  3️⃣ Controller

// Acts as a bridge between Model and View

// Takes user input

// Updates Model and selects the correct View

// 👉 Controls application flow

// +++++++++++++++ Simple real-life example 🛒

// Online Shopping App

// Model → Product data, prices, orders

// View → Product page, cart page

// Controller → “Add to cart” button logic


//+++++++++  Why MVC is important (Interview points ⭐)

// ✔ Clean & structured code
// ✔ Easy maintenance
// ✔ Easy testing (unit testing)
// ✔ Parallel development
// ✔ Better scalability


import express from 'express'
import { handelUsers } from './controller/user.controller.js';

const app=express();

app.set('view engine','ejs')
app.get('/users',handelUsers)

app.listen(4800);