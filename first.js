console.log("Welcome to JavaScript!");
console.log("Today is a great day to learn programming.");
//Variables
age=24
console.log("I am " + age + " years old.");
name = "Alice";
console.log("My name is " + name + ".");
x=null
console.log("The value of x is: " + x);
y=undefined
console.log("The value of y is: " + y);
//Data Types

isStudent = true;
console.log("Is the person a student? " + isStudent);
//way to declare a variable
var city = "New York";
let country = "USA";
const pi = 3.14;
console.log("City: " + city);
console.log("Country: " + country);
console.log("Value of pi: " + pi);
//Alaways use let and const instead of var to declare variables to avoid scope issues and unintended consequences. 
// Use const for variables that won't change and let for those that will.
//let and const are block-scoped, meaning they are only accessible within the block they are defined in, while var is function-scoped.
// This can lead to unexpected behavior when using var, as it can be accessed outside of its intended scope.
//  Using let and const helps to prevent such issues and promotes better code organization and readability.
//const cannot be reassigned, while let can be reassigned. This means that if you declare a variable with const, you cannot change its value later in the code. 
// On the other hand, if you declare a variable with let, you can reassign it to a new value as needed.
// This is why it's important to use const for variables that should not change and let for those that may need to be updated throughout the program.
//
//objects=collection of key-value pairs
const person = {
    name: "Bob",
    age: 30,
    isStudent: false
};
console.log( person);
typeof person; //object
console.log("Person's name: " + person.name);
console.log("Person's age: " + person.age);
console.log("Is the person a student? " + person.isStudent);
console.log("Person's name using bracket notation: " + person["name"]);
//updating object properties
person.age = 31;
console.log("Updated person's age: " + person.age);
//const variables cannot update
//const object properties can be updated, but the variable itself cannot be reassigned to a new object.
//  This means that while you can change the properties of a const object, you cannot assign a completely new object to the same variable. 
// For example, you can do person.age = 31, but you cannot do person = { name: "Alice", age: 25, isStudent: true } if person is declared as const.
