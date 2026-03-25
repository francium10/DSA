console.log("Hello World")

// Data types
// Number, String, Boolean


let a = 10;
let b = 15;
let sum = a + b;
let difference = b - a;
let qoutient = b / a;
let product = a * b;
let modulas=b%a

console.log("sum:", sum+ " modulus:", modulas);

let firstName = "Francis";
let surName = "Lufwendo";
let fullName=firstName+" "+ surName
console.log(fullName)


let c = 3
console.log(c + firstName)

console.log("Francis" + "Lufwendo"); // String concatination

let arr = [2, 3, 5, 7, 11, 13, [17, 19]] // Stores a  coolection of data in index number and value. starting from 0 uses square-brackets[]

console.log(arr[1]) //output 3
console.log(arr[6]) //output [17,19]
console.log(arr[6][1]) //output 19

// Arrays can store all data types mixed or not mixed 
// it can store an object and it can store arrays as well. 


// Objects: These store a colection of data in key value pairs. and uses curly brackets{} 

let obj = {
    nickname: "Francium",
    age: 25,
    hobbies: ["singing", "sports", "music"],
    iSchristian: true,    
}

console.log(obj.age) //output 25
console.log(obj.hobbies[1]) //output 3