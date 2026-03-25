// Finding the largest number function 
let arr = [2, -3, -5, 7, 8, 9];

function findLargestNumber(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest
}
let result = findLargestNumber(arr);
console.log(result);



// Finding the secondLargest number 

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
let results = findSecondLargest(arr);
console.log(results);


// Find the smallest number
function findSmallest(arr) {
    let smallest = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<smallest) {
            smallest=arr[i]
        }
    }
    return smallest
}
let output = findSmallest(arr);
console.log(output);


//function that searches an element in an array and returns its index number.

const searchElement = (arr,x) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == x) {
           return i
        }
        else if (arr[i] !== x) {
            console.log("The element is not defined so no index number is found");
        }
    
        
    }
}
console.log(searchElement(arr, 2));



// Function that checks for negative numbers in an array and prints the sum number of negatives in an array.
function findSumNumberOfNegative(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            sum = arr[i]
            +=sum
        }
    }
    return sum
}
console.log(findSumNumberOfNegative(arr));


//Function that checks for negative numbers in an array and prints the total number of negatives in an array.

let arr2 = [1, -2, 5, -3, -10, 9, -10, -11];
let count = 0;
function countNegativeNumbers(arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < 0) {
            count = count + 1;
        }
    }
    return count;
}
console.log(countNegativeNumbers(arr2));


// The secondSmallest number function
function findSecondSmallest(arr) {      
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] != smallest) {
            secondSmallest = arr[i];
        }
    }}
let outpt = findSecondSmallest(arr);
console.log(outpt);


// find the secondLargestNumber in another way
let arr3 = [3, 4, 5, 19, 134, 154];

const findSecondLargest = (arr3) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > largest) {
            secondLargest = largest;  // Save old largest as second
            largest = arr3[i];
        } else if (arr3[i] > secondLargest) {
            secondLargest = arr3[i];   // Just update secondLargest
        }
    }
    return secondLargest;  // Don't forget return!
}

let resultt = findSecondLargest(arr3);
console.log(resultt);  // Output: 134