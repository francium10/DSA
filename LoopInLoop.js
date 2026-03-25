// Loops in loops 
// Very important concept

// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 3; j++){
//         console.log("i is " +i," j is "+j);
//     }
// }

// What if we change the condition to j<i
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log("i is " + i, " j is " + j);
//     }
// }


// What if we change the condition to j<=i
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log("i is " + i, " j is " + j);
//     }
// }
//Understanding how the output will behave based the the i and j values in loops in loops is a very important concept.


// What if we change the condition to reverse iteration for j?
for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        console.log("i is " + i, " j is " + j);
    }
}

// Diffrent question 
for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        console.log("i is " + i, " j is " + j);
    }
}

// What if you reverse everything
for (let i = 5; i >0; i--) {
    for (let j = 0; j < i; j++) {
        console.log("i is " + i, " j is " + j);
    }
}