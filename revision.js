// Q1. What's the difference between let, const, and var? When would you use each?
// let is a block scoped variable declaration, meaning it is only
//  accessible within the block it is defined in. This is different
//  from var, which is function-scoped and can lead to unintended   
// behavior if not used carefully. Using let helps to avoid issues
//  related to variable hoisting and scope leakage, making the code 
// more predictable and easier to debug. const is also block scoped except it doesnt allow 
// variable reassignment.

// Example of let
for (let i = 0; i < 3; i++) {
    console.log(i); // Outputs 0, 1, 2
}       
console.log(i); // Error: i is not defined      

// Example of const
const pi = 3.14;
console.log(pi); // Outputs 3.14
// pi = 3.14159; // Error: Assignment to constant variable      
// However, for objects and arrays declared with const,
// their contents can still be modified.
const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // Outputs [1, 2, 3, 4]

// Example of var
for (var j = 0; j < 3; j++) {
    console.log(j); // Outputs 0, 1, 2
}                           
console.log(j); // Outputs 3, because var is function-scoped


// Summary: Use let for variables that will change and need block scope.
// Use const for variables that won't change. Avoid using var to prevent scope-related issues.  


// Q2. In your isEligibleToVote function, 
// you check if (age < eligible). What happens when age equals exactly 18?
//  Is there a bug here?

const isEligibleToVote=(age) => {
    if (age < 18) {
        return "Not Eligible to Vote";
    }       else {                  
        return "Eligible to Vote";
    }           
}
console.log(isEligibleToVote(18)); // Outputs "Eligible to Vote"

// yes there is a bug in the question statement.
// The condition should be if (age <= 18) to correctly handle the case when age is exactly 18.
// With the current condition (age < 18), if age is exactly 18, it will return "Eligible to Vote", which is correct.
// However, if the intention was to include 18 as eligible, the condition should be adjusted accordingly.         

// No bug here.
// When age equals exactly 18, the condition (age < 18) evaluates to false.
// Therefore, the function will return "Eligible to Vote" for age 18,
// which is the correct behavior since individuals who are 18 years old
// are legally eligible to vote in most jurisdictions.    

// Q3. What's the difference between return and console.log() in a function?
// Why does your square function use return while calculateBMI uses console.log()?
const square = (num) => {
    return num * num;
}           
console.log(square(4)); // Outputs 16

const calculateBMI = (weight, height) => {
    const bmi = weight / (height * height);
    console.log("BMI is: " + bmi);
}

calculateBMI(70, 1.75); // Outputs BMI is: 22.857142857142858

// The difference between return and console.log() in a function is their purpose and effect.
// return is used to send a value back to the caller of the function.
// console.log() is used to print a value to the console.
// The square function uses return because it's designed to compute and return a value,
// while calculateBMI uses console.log() because it's designed to display information directly.


// Q4. Write a for loop that prints "Hello world" 5 times,
// but starts counting from 3 and increments by 2 each time.    
for (let i = 3; i < 13; i += 2) {
    console.log("Hello world");
}       
// This loop starts at 3 and increments by 2 each time,
// printing "Hello world" until the condition i < 13 is no longer met.
// It will print "Hello world" 5 times (for i = 3, 5, 7, 9, 11).


// Q5. Given an array of numbers, write a for loop that prints only the even numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];          
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
// This loop iterates through the array of numbers and checks if each number is even.
// If a number is even (i.e., divisible by 2 with no remainder), it prints that number to the console.log


// Q5. What will this print?
for (let i = 10; i >= 0; i = i - 3) {
    console.log(i);
}
// This loop starts at 10 and decrements by 3 each time,
// printing the value of i until the condition i >= 0 is no longer met.
// It will print: 10, 7, 4, 1   



// Q6. Write a for loop that sums all the numbers in an array and prints the result.
let arrToSum = [5, 10, 15, 20];
let sum = 0;        
for (let i = 0; i < arrToSum.length; i++) {
    sum += arrToSum[i];
}   
console.log(sum);

// This loop iterates through the array arrToSum, adding each element to the sum variable.
// After the loop completes, it prints the total sum of the array elements.


// Q4. Why did you initialize smallest as arr4[0] in your searchSmallestNumber function,
//  but largest as 0 in searchLargestNumber? Is there a problem with initializing largest to 0?
const searchSmallestNumber = (arr4) => {
    let smallest = arr4[0];     
    for (let i = 1; i < arr4.length; i++) {
        if (arr4[i] < smallest) {
            smallest = arr4[i];
        }       
    }
    return smallest;
}   
const searchLargestNumber = (arr4) => {
    let largest = 0;     
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] > largest) {    
            largest = arr4[i];
        }
    }
    return largest;
}           
// Initializing smallest as arr4[0] ensures that we start with a valid element from the array.
// This way, we can accurately compare each subsequent element to find the smallest value.
// On the other hand, initializing largest to 0 can lead to incorrect results if all elements in arr4 are negative.
// In such cases, the function would incorrectly return 0 as the largest number,
// even though it is not present in the array. A better approach would be to initialize largest as arr4[0] as well,
// similar to smallest, to ensure accurate comparisons regardless of the array's contents.


// Q6. What will this print?
// let arr = [5, 10, 15];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// This code will print NaN (Not a Number).
// The loop iterates from 0 to arr.length (which is 3),
// but arr[3] is undefined since the valid indices are 0, 1, and 2.
// When we try to add undefined to sum, the result becomes NaN.
// To fix this, the loop condition should be i < arr.length instead of i <= arr.length.


// Q7. What will this print?
function test(x) {
    if (x > 10) {
        return "big";
    }
    console.log("small");
}
let result = test(15);
console.log(result);

// This code will print "big".
// When test(15) is called, the condition x > 10 evaluates to true,
// so the function returns "big" immediately.
// The console.log("small") line is never executed because the function has already returned.
// Therefore, result will be "big", and that is what gets printed.

// Q8. What will this print?
let obj = { name: "Francis", age: 25 };
console.log(obj["name"]);
console.log(obj.name);
console.log(obj[name]);

// This code will print:
// Francis
// Francis
// ReferenceError: name is not defined      
// The first two console.log statements correctly access the "name" property of the obj object,
// printing "Francis" both times.
// However, the third console.log statement tries to access obj[name],
// but name is not defined as a variable in this context,
// leading to a ReferenceError. To access the "name" property correctly,
// it should be obj["name"] or obj.name.    


// Q9. What will this print?
let arr5 = [1, 2, 3];
arr5[5] = 6;
console.log(arr5.length);
console.log(arr5);      
// This code will print:


// Q9. This function is supposed to count even numbers but has a bug. Find it:
function countEvens(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 = 0) {
            count++;
        }
    }
    return count;
}
// The bug in the function is in the if condition:
// if (arr[i] % 2 = 0) {      
// The single equals sign (=) is an assignment operator, not a comparison operator.     
// It should be changed to a double equals (==) or triple equals (===) for comparison.
// The corrected line should be:    
if (arr[i] % 2 === 0) {
// Additionally, the loop should start from index 0 to include all elements in the array.
// The corrected for loop should be:    
for (let i = 0; i < arr.length; i++) {  
// Here is the corrected function:
function countEvens(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
// This function now correctly counts and returns the number of even numbers in the array.



// Q10. This function should return the sum of all positive numbers, but it doesn't work correctly:
function sumPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = arr[i];
        }
    }
    return sum;

}
// The issue with the function is that it assigns arr[i] to sum
// instead of adding arr[i] to sum.
// The line sum = arr[i]; should be changed to sum += arr[i]; to accumulate the sum of positive numbers.    
// Here is the corrected function:
function sumPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}   
// This function now correctly returns the sum of all positive numbers in the array.


Part 4: Write the Code
// Q11. Write a function reverseArray that takes an array and returns a new array 
// with elements in reverse order. Don't use the built-in .reverse() method.
// Q12. Write a function isPalindrome that takes a string and returns true
//  if it reads the same forwards and backwards (e.g., "racecar" → true, "hello" → false).
// Q13. Write a function findAverage that takes an array of numbers and returns the average.
// Q14. Write a function removeDuplicates that takes an array and returns 
// a new array with duplicates removed. Example: [1, 2, 2, 3, 3, 3] → [1, 2, 3]

// Q11. Write a function reverseArray that takes an array and returns a new array 
// with elements in reverse order. Don't use the built-in .reverse() method.
function reverseArray(arr) {    
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
} 

// Q12. Write a function isPalindrome that takes a string and returns true
//  if it reads the same forwards and backwards (e.g., "racecar" → true, "hello" → false).
function isPalindrome(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}       
// Q13. Write a function findAverage that takes an array of numbers and returns the average.
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}           
// Q14. Write a function removeDuplicates that takes an array and returns 
// a new array with duplicates removed. Example: [1, 2, 2, 3, 3, 3] → [1, 2, 3]
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}     
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(findAverage([10, 20, 30, 40])); // 25
console.log(removeDuplicates([1, 2, 2, 3, 3, 3])); // [1, 2, 3]             
console.log(arr5.length); // Outputs 6
// This is because assigning a value to index 5 creates empty slots at indices 3 and 4.
console.log(arr5); // Outputs [1, 2, 3, empty × 2, 6]
// The array now has a length of 6, with undefined values at indices 3 and 4.                                           
//  It will print 6, followed by the array [1, 2, 3, <2 empty items>, 6].
//  It will print 6, followed by the array [1, 2, 3, <2 empty items>, 6].
// The code will print 6, followed by the array [1, 2, 3, <2 empty items>, 6].  