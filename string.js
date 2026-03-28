//String
//it is a sequence of characters enclosed in single quotes, double quotes or backticks
//it is immutable, which means once a string is created, it cannot be changed
// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `Hello World`;
// console.log("String 1: " + str1);
// console.log("String 2: " + str2);
// console.log("String 3: " + str3);
// //length of string
// console.log("Length of String 1: " + str1.length);
// //concatenation of strings
// let str4 = str1 + " " + str2;
// console.log("Concatenated String: " + str4);
// //string indices
// console.log("First character of String 1: " + str1[0]);
// console.log("Last character of String 1: " + str1[str1.length - 1]);
// //string methods
// console.log("Uppercase String 1: " + str1.toUpperCase());
// console.log("Lowercase String 2: " + str2.toLowerCase());
// console.log("Substring of String 3: " + str3.substring(0, 5));
// //Template literals
// let name = "Alice";
// let greeting = `Hello, ${name}!`;
// console.log(greeting);
// //escape characters
// let str5 = "This is a string with a newline character.\nThis is the second line.";
// console.log(str5);
// //strim
// let str6 = "   Hello World!   ";
// console.log("Trimmed String: '" + str6.trim() + "'");
// //slice
// let str7 = "Hello World!";
// console.log("Sliced String: " + str7.slice(0, 5));
// //replace
// let str8 = "Hello World!";
// console.log("Replaced String: " + str8.replace("World", "JavaScript"));
// //concat method
// let str9 = "Hello";
// let str10 = "World";
// console.log("Concatenated String using concat method: " + str9.concat(" ", str10));
// //charAt method
// let str11 = "Hello World!";
// console.log("Character at index 0: " + str11.charAt(0));
// console.log("Character at index 6: " + str11.charAt(6));
//Question

let fullname= prompt("Enter your fullname: ");
let username= fullname.trim().toLowerCase().replace(/\s/g, '')+"@example.com";
console.log("Generated username: " + username);
 