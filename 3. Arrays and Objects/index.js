/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0], numbers[4], numbers[numbers.length-1]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let min = 0;
numbers.forEach(number => {
    if(number < min || min === 0) {
    min = number;
  }
});
let max = 0;
numbers.forEach(number => {
    if(number > max) {
    max = number;
  }
});
let average = 0;
numbers.forEach(number => average += number);
average /= numbers.length;

console.log(min, max, average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer:
// I think that both lists in python and arrays in JavaScript are very similar , except that they follow different syntax rules and have different approaches in manipulating data inside both objects.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const IT114L = {
    courseCode: 'IT114L',
    courseName: 'Web Technologies (Laboratory)',
    units: 3,
    numStudents: 40
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professorName = 'Job Lipat';
console.log(IT114L.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const myCurrentCourses = [
    {
        courseCode: "CS107",
        courseName: "Information Management",
        units: 2,
        professorName: "Dahlia de Mesa"
    },
    {
        courseCode: "CS107L",
        courseName: "Information Management (Laboratory)",
        units: 1,
        professorName: "Adomar Ilao"
    },
    {
        courseCode: "HUM039",
        courseName: "Ethics",
        units: 3,
        professorName: "Rogelio Valuenzuela"
    },
    {
        courseCode: "IT114",
        courseName: "Web Systems and Technologies",
        units: 2,
        professorName: "Mark Anthony Hernandez"
    },
    {
        courseCode: "IT114L",
        courseName: "Web Systems and Technologies (Laboratory)",
        units: 1,
        professorName: "Job Lipat"
    },
    {
        courseCode: "IT132",
        courseName: "Logic Design and Switching Theory",
        units: 2,
        professorName: "Leonnel de Mesa"
    },
    {
        courseCode: "IT132L",
        courseName: "Logic Design and Switching Theory (Laboratory)",
        units: 1,
        professorName: "Dahlia de Mesa"
    },
    {
        courseCode: "IT133",
        courseName: "Technopreneurship",
        units: 3,
        professorName: "Khristian Kikuchi"
    }
]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0;
myCurrentCourses.forEach(course => {
    totalUnits += course.units;
});
console.log(totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
//  The equivalent of JavaScript objects in Python would be dictionaries. Both of them almost follow similar syntaxes except for some key differences.
//  Keys in Python dictionaries must be hashable (like a string or a number) while JavaScript does not have such a requirement.

//  In JavaScript, this object is valid.
//  const javascriptObject = { name: "Julian Peter Gerona", year: 2002 }


// While in Python, this dict is invalid.
//  pythonDictionary = {name: 'Julian Peter Gerona', year: 2002}

// In order for the give dict to be valid, the keys must be hashable.
// pythonDictionary = {'name': 'Julian Peter Gerona', 'year': 2002}

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let numbersCopy = [...numbers, 56, 69, 92];
console.log(numbersCopy);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let {courseCode, units, ...rest} = IT114L;
console.log(courseCode, units);
