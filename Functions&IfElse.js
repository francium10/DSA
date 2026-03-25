// Functions
// Tells the computer what to do

function printHelloWorld() {
    console.log("Hello World !!!")
}
printHelloWorld() // always call a function for execution

function greet(name) {
    console.log("Namaste " + name)
}

let x = "Virat Kolhi"

greet("FRANCIS");
greet("Thomas");
greet(x)



function sumOfTwoNumbers(a, b) {
    let sum = a + b
    console.log(sum)
}

sumOfTwoNumbers(7, 11);


// Multiplication exercise for myself 
function muitiplicationOfNumbers(a, b, c) {
    let product = a * b * c
    console.log(product)
}
muitiplicationOfNumbers(3, 3, 2);



// if,else 

// Create a function that accepts age and tells you whether that age is eligible to vote or not.
function isEligibleToVote(age) {
    let eligible = 18
    // if you want you can remove the let assigment of age and just say(age > 18)
    if (age < eligible) {
        console.log("Sorry you are not eligible to vote")
    }
    else {
        console.log("Congratulations! you are eligible to vote")
    }

}

isEligibleToVote(21);
isEligibleToVote(17);
isEligibleToVote(21);
isEligibleToVote(18);

// Create a function that accepts age and tells you whether that age is eligible to drive or not. if,else if, else.

function isEligibleToDrive(ages) {
    if (ages < 0) {
        console.log("Invalid age")
    }
    else if (ages < 18) {
        console.log("Sorry you are not eligible to Drive")
    }
    else {
        console.log("Congratulations! you are eligible to Drive")
    }
}

isEligibleToDrive(21);
isEligibleToDrive(17);
isEligibleToDrive(21);
isEligibleToDrive(-1);


// Write a function to check if a number is even or odd

function isEven(numb) {
    let remainder = numb % 2;
    if (remainder==0) {
        console.log("This number is even");
    }
    else {
        console.log("This number is an old number")
    }
}
isEven(13);
isEven(10);


// Write a reusable function called calculateBMI that takes weight(kg) and 
// height(m) and returns the BMI.Then use it to calculate BMI for two different people.

function calculateBMI(weight, height) {
    let bmi = weight / (height * height)
    console.log(bmi)
}
calculateBMI(90, 2);
calculateBMI(100, 1.8);


function processUser(userName, userAge) {
    console.log(userName + " is " + userAge + " years old");
}
processUser("Emmanuel", 17)
processUser("Francium", 25)


// Write a function that takes two numbers as arguments and returns the largest number.
function findLargestNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is the largest number");
    }
    else if (num2 > num1) {
        console.log(num2 + " is the largest number");
    }
    else {
        console.log("Both numbers are equal");
    }   
}    
findLargestNumber(10, 20);
findLargestNumber(30, 15);
findLargestNumber(5, 5);    


//function that calculates square of a number
function square(x) {
  return x * x;
}
let result = square(3);
console.log("The square is:", result);

// Instead of printing the result inside the function, it returns the value.
// The result is printed outside by calling the function.

//function that checks if a number is positive, negative or zero
function checkNumberSign(num) {
    if (num > 0) {
        console.log("The number is positive");
    }
    else if (num < 0) {
        console.log("The number is negative");
    }
    else {
        console.log("The number is zero");
    }       }