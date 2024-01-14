/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log(`Hello ${name}!`);
}
greet("Julian");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
//  A function declaration is defined using the function keyword followed by the name and parameters.
//  A function expression is defined using a variable assignment where the function keyword is followed by anonymous function or function name and parameters.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = (length, width) => {
    return length * width;
}
const area = calculateArea(5, 5);
console.log(area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer:
//  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
const numbers = [1, 2, 3, 4, 5];
function modifyArray(array, func) {
    return array.map(func);
}
const incrementedNumbers = modifyArray(numbers, n => n + 1);
console.log(incrementedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import {add, PI} from './mathUtils.js';
console.log(add(9,10));
console.log(PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from './isPalindrome.js';
const myWord = "Racecar";
console.log(isPalindrome(myWord) ? `${myWord} is a palindrome!` : `${myWord} is not a palindrome!`);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
//  The require and module.exports syntax is used in Node.js and CommonJS modules. The import and export syntax is used in modern ECMAScript (ES) modules.
//  The require function is used to import modules in CommonJS, while import is used in ES modules.
//  module.exports is used to export values from CommonJS modules, while export is used to export values from ES modules.
//  The import and export keywords is generally preferred because it enables the module "tree-shakeable", meaning unused code can be excluded from the bundle. This results in smaller package sizes.
//  import/export also avoids issues with circular dependencies that can occur with require/module.exports.
