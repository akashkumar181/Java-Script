//Airthmatic Operators
let a = 10;
let b = 5;      
console.log("Addition: " + (a + b));        // Addition
console.log("Subtraction: " + (a - b));     // Subtraction
console.log("Multiplication: " + (a * b));  // Multiplication
console.log("Division: " + (a / b));        // Division
console.log("Modulus: " ,(a % b));         // Modulus  
console.log("Exponentiation: " , (a ** b)); // Exponentiation                    
//Unary Operators
let c = 10;
console.log("Unary Plus: " + (++c));        // Unary Plus
console.log("Unary Minus: " + (--c)); 
console.log("Unary Minus: " + (c));       // Unary Minus
console.log("Increment: " + (c++));      // Increment
console.log("Decrement: " + (c--));     // Decrement    
//Assignment Operators
let d = 10;
d += 5; // Equivalent to d = d + 5
console.log("Addition Assignment: " + d);
d -= 3; // Equivalent to d = d - 3
console.log("Subtraction Assignment: " + d);
d *= 2; // Equivalent to d = d * 2
console.log("Multiplication Assignment: " + d);
d /= 4; // Equivalent to d = d / 4
console.log("Division Assignment: " + d);   
d %= 3; // Equivalent to d = d % 3
console.log("Modulus Assignment: " + d);    
d **= 2; // Equivalent to d = d ** 2
console.log("Exponentiation Assignment: " + d);     
//Comparison Operators
let e = 10;
let f = 5;
console.log("Equal to: " + (e == f));          // Equal to
console.log("Not equal to: " + (e != f));    // Not equal to                    
console.log("Strict equal to: " + (e === f)); // Strict equal to
console.log("Strict not equal to: " + (e !== f)); // Strict not equal to
console.log("Greater than: " + (e > f));     // Greater than
console.log("Less than: " + (e < f));        // Less than
console.log("Greater than or equal to: " + (e >= f)); // Greater than or equal to
console.log("Less than or equal to: " + (e <= f)); // Less than or equal to
//Logical Operators
let g = true;
let h = false;
console.log("Logical AND: " + (g && h)); // Logical AND
console.log("Logical OR: " + (g || h));  // Logical OR
console.log("Logical NOT: " + (!g));     // Logical NOT     
//Bitwise Operators
let i = 5; // 0101 in binary        
let j = 3; // 0011 in binary
console.log("Bitwise AND: " + (i & j)); // Bitwise AND

console.log("Bitwise OR: " + (i | j));  // Bitwise OR
console.log("Bitwise XOR: " + (i ^ j));
console.log("Bitwise NOT: " + (~i));    // Bitwise NOT
console.log("Left Shift: " + (i << 1)); // Left Shift
console.log("Right Shift: " + (i >> 1));

//conditional (ternary) operator
let k = 10;
let l = (k > 5) ? "Greater than 5" : "Less than or equal to 5";
console.log("Ternary Operator: " + l); // Ternary Operator  
//typeof operator
let age= 25;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
let mode= "dark";
if (mode === "dark") {
  console.log("Dark mode is enabled.");
} else {
  console.log("Light mode is enabled.");
}
console.log("mode: " +mode); 
//else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
console.log("Grade: F");
}
//switch statement
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");      
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");

    break;
    case 7:
    console.log("Sunday");
    break;
    default:
    console.log("Invalid day");
}
//alert() method
//alert("Hello, World!"); // Displays an alert dialog with the message "Hello, World!"
//prompt() method
let number = prompt("Please enter a number:"); // Prompts the user to enter a number and stores it in the variable 'number'
console.log("You entered: " + number); // Logs the entered number to the console
if(number%5==0){
    console.log("The number is divisible by 5.");
} else{
    console.log("The number is not divisible by 5.");
}