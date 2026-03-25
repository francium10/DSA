//For Loops for repetitive tasks 

for (let i = 0; i <= 4; i++) {
    console.log('Hello world');
}

// //To see how loops work with condition and iteration
for (let i = 0; i <= 4; i++){
    console.log('Hello world '+i) ;
}

// starting with initial of 3
for (let i = 3; i < 5; i++){
    console.log('Hello world ' + i);
}

// With an increment of 2 ie i=i+2
for (let i = 2; i < 9; i=i+2) {
    console.log('Hello world ' + i);
}

// Reverse iteration ouput question
for (let i = 5; i > 0; i = i-1) {
    console.log('Hello ' + i);
}

//This won't run not even a single time becouse the condition is zero
for (let i = 5; i < 4; i = i + 2) {
    console.log('Hello world ' + i);
}


// // Arrays and loops
let arr = [10, 2, 6, 7, 8, 3, 8]

let length = arr.length
console.log(length)

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// Printing only even numbers in an array
let arr2 = [10, 3, 5, 2, 7, 6, 9];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
    }
}

// Summing all numbers in an array
let arr3 = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log("Sum of array elements:", sum);