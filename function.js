//Function
function myFunction(){
    console.log("Hello World");
    console.log("This is a function");
}
myFunction();
//function with parameters
function add(a, b){
    return a + b;
}
let sum = add(5, 10);
console.log("Sum: " + sum);
//function with default parameters
function greet(name = "Guest"){
    console.log("Hello, " + name);
}
greet();
greet("Alice");
//function expression
let multiply = function(a, b){
    return a * b;
}
console.log("Product: " + multiply(5, 10));
function subtract(a,b){
    console.log("Difference: " + (a - b));
}
subtract(10, 5);
//arrow function
let divide = (a, b) => {
    return a / b;
}
console.log("Quotient: " + divide(10, 5));
//create a function takes a input string return vowels in the string
let str=prompt("Enter a string: ");
function extractVowels(str){
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u'){
            return str[i];
        }
}
}
console.log("Vowels in the string: " + extractVowels(str));
//same question using arrow function
let extractVowelsArrow = (str) => {
    let vowels = '';    
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u'){
            vowels += str[i];
        }   
    }
    return vowels;
}   
console.log("Vowels in the string using arrow function: " + extractVowelsArrow(str));
//foreach loop to iterate over an array of numbers and print the square of each number
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log("Square of " + num + ": " + (num * num));
});
//callback function
function performOperation(a, b, operation){
    return operation(a, b);
}
let result = performOperation(10, 5, (x, y) => x + y);
console.log("Result of addition: " + result);
result = performOperation(10, 5, (x, y) => x - y);
//high order function
//function that takes another function as an argument
//function that returns another function
//callback function
//using for each find squre of each element in an array
let arr = [1, 2, 3, 4, 5];
arr.forEach(num => {
    console.log("Square of " + num + ": " + (num * num));
});
//callback for same question
function square(num){
    return num * num;
}
arr.forEach(num => {
    console.log("Square of " + num + ": " + square(num));
});
//map function to find square of each element in an array
let squaredArray = arr.map(num => num * num);
console.log("Squared Array: " + squaredArray);
//creates a new array with the results of calling a provided function on every element in the calling array
//filter function to find even numbers in an array
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log("Even Numbers: " + evenNumbers);
//creates a new array with all elements that pass the test implemented by the provided function 
//reduce function to find the sum of all elements in an array
let sumOfArray = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Array: " + sumOfArray);
//executes a reducer function on each element of the array, resulting in a single output value

