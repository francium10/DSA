
// Function that searches for elements and returns its index number 
let arr = ["a", "b", "c", "d", "f", "g", "h"];

function searchElement(arr,element) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i]==element) {
            return i;
        }
    }
    return -1
}

console.log(searchElement(arr, "h"));


// Function that checks for negative numbers in an array and prints the total number of negatives in an array.

let arr2 = [1, -2, 5, -3, -10, 9,-10,-11];

let count = 0;
function countNegativeNumbers(arr2) {
    for (let i = 0; i < arr2.length; i++){
        if (arr2[i]<0) {
            count = count +1;
        }
    }
    return count;
    }  
console.log(countNegativeNumbers(arr2));


//Write a function which searches an array and returns the largest element in an array.

let arr3 = [10, 20, 33, 47, 89, 90, 157]

let largest = 0;

const searchLargestNumber=(arr3)=>{
    for (let i = 0; i<arr3.length; i++){
        if (arr3[i]>largest) {
            largest=arr3[i]
        }
    }
    return largest 

}

console.log(searchLargestNumber(arr3));
//Write a function which searches an array and returns the smallest element in an array.

let arr4 = [10, 20, 3, 47, 89, 90, 1]       
let smallest = arr4[0];

const searchSmallestNumber=(arr4)=>{        
    for (let i = 0; i<arr4.length; i++){
        if (arr4[i]<smallest) {
            smallest=arr4[i]
        }   

    }
    return smallest     
}

console.log(searchSmallestNumber(arr4));