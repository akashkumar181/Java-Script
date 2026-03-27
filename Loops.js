//for loop
for(let i=0; i<5; i++){
    console.log("For Loop Iteration: " + i);
}
//calculate the sum of first 5 natural numbers using for loop
let sum = 0;
for(let i=1; i<=5; i++){
    sum += i;
}
console.log("Sum of first 5 natural numbers: " + sum);
//infinite loop
// for(let i=0; i>=0; i++){
//     console.log("This is an infinite loop");
// }
//while loop
let j = 0;
while(j<5){
    console.log("While Loop Iteration: " + j);
    j++;
}
//do-while loop
let k = 0;
do{
    console.log("Do-While Loop Iteration: " + k);
    k++;
}while(k<5);
//for of loop
//it is used in string array and other iterables
let arr = [11, 22, 33,44, 55];
for(let num of arr){
    console.log("For Of Loop Iteration: " + num);
}
//for in loop
//it is used in objects
let obj = {name: "John", age: 30, city: "New York"};
for(let key in obj){
    console.log("For In Loop Iteration: " + key + ": " + obj[key]);
}
//print even numbers from 1 to 100 using for loop
for(let i=1; i<=100; i++){
    if(i%2 === 0){
        console.log("Even Number: " + i);
    }