let array= [1, 2, 3, 4, 5];
console.log("Array: " + array);
//length of array
console.log("Length of Array: " + array.length);
//accessing array elements
console.log("First element of Array: " + array[0]);
console.log("Last element of Array: " + array[array.length - 1]);
//adding elements to array
array.push(6);
console.log("Array after adding an element: " + array);
//removing elements from array
array.pop();

console.log("Array after removing an element: " + array);
//iterating over array
for(let i=0; i<array.length; i++){
    console.log("Array Element at index " + i + ": " + array[i]);
}
//for of loop
for(let num of array){
    console.log("For Of Loop Array Element: " + num);
}
//array methods
console.log("Reversed Array: " + array.reverse());
console.log("Sorted Array: " + array.sort());
console.log("Array to String: " + array.toString());
console.log("Array joined with '-': " + array.join('-'));
//array slicing
let slicedArray = array.slice(1, 4);
console.log("Sliced Array (index 1 to 3): " + slicedArray);
//concatenation of arrays
let array2 = [6, 7, 8];
let array3=[9,10];
let concatenatedArray = array.concat(array2);//creates a new array by concatenating array and array2
console.log("Concatenated Array: " + concatenatedArray);
let concatenatedArray2 = array.concat(array2, array3);//creates a new array by concatenating array, array2 and array3
console.log("Concatenated Array 2: " + concatenatedArray2);

