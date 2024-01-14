/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squareNumbers = numbers.map(number => number ** 2);
console.log(squareNumbers);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4);
console.log(longWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const singleString = words.reduce((accumulator, word) => accumulator + word, '');
console.log(singleString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
//  Map - creates a new array from an existing array, and then applies a function to each one of the elements of the existing array.
//  Filter - based on the given name, filters out each element by using a conditional statement and returns a new array.
//  Reduce - based on the given name, reduces an existing array to just one value then returns accumulated value.
