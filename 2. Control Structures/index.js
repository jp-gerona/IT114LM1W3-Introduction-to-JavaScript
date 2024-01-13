/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
console.log(randomNumber);

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50) {
    console.log("more than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 === 0) {
    console.log("fizz");
} else if (randomNumber % 5 === 0) {
    console.log("buzz");
} else if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
} else {
    console.log(randomNumber);
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log(randomNumber % 2 === 0 ? toDisplay = "Even" : toDisplay = "Odd");

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: 
//  You can simulate a do-while loop using this syntax
//  switch (variable1) {
//      case 'variable1':
//          *do stuff*;
//          break;
//      case 'variable2:
//          *do stuff*;
//          break;
//      default:
//          *do stuff*;
//          break;
//  }
//
//  You should use a switch-statement when you want to check a value against multiple case clauses.
//  It is an alternative to long if/else if chains.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;
while (i < list.length) {
    console.log(list[i]);
    i++;
}

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer:
//  You can simulate a do-while loop using this syntax
//  do {
//      do something
//  } while (condition)

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (fruit in list) {
    console.log(list[fruit]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach((fruit) => console.log(fruit));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
//  Use for of to iterate over array values, strings, etc
//  Use for in to iterate over object properties
//  Use forEach as a simpler array iterator

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
//const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing
const denominator = 0;

try {
    const quotient = numerator / denominator;
    if (denominator === 0) {
        throw error;
    }
    console.log(quotient);
} catch (error) {
    console.log("Error! Cannot divide by zero.");
} finally {
    console.log("cleaning up resources");
}

