/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log(lebron); // Prints out undefined.
var lebron = "1.1 James";

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let drake = "1.2 Anita Max Wynn";
console.log(drake); // ReferenceError: Cannot access 'variable' before initialization

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const Pi = 3.14;
// Pi = 3.15; TypeError: Assignment to constant variable

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
//  var has a default value of undefined when it is not assigned a variable. It can be reassigned with another value.
//  let can also be reassigned with another value, however it cannot be accessed before initialization and will print a Reference Error.
//  const or "constant" means that the variable's value cannot be changed or it will print out a TypeError.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const add = 5 + 2 * 7;
console.log(add); // Prints out 19

// Checkpoint 1.2 What operators did you use?
// Answer: 
//  The arithmethic operators that I used are addition and multiplication.
//  Javascript also follows the rule of precedence as it prints 19 (2 * 7 = 14 + 5 = 19).
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let myName = "1.5 ";
myName += "Julian"
console.log(myName + " Gerona"); // Prints out 1.5 Julian Gerona


// Checkpoint 1.3 What operators did you use?
// Answer: 
//  I used the string concatenation (+) operator and the shorthand assignment (+=) operator.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const logicalOne = true && true; // AND Operator, true and true returns true
const logicalTwo = false || "chicken" === "egg"; // OR Operator, false or false returns false

// Checkpoint 1.4 What operators did you use?
// Answer: 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const municipalities = ["Cabuyao", "Calamba", "Bay"];
console.log(4 in municipalities); // returns false since index 4 does not exist

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
//  Abstract Equality comparison (==) is different from Strict Equality comparison (===).
//  Abstract Equality comparison makes Javascript do type coercion of two values that are being compared.
//  [] is a truthy value because all objects are truthy.
//  Since false is primitive, It tries to compare them by converting [] as a primitive.
//  It converts them both to null or 0, which evaluates true.
// Your code here
console.log([] == false); // Prints out true.