// IF statement 

// >, <, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true
const temprature = 41

// if (temprature === 41){
//     console.log("lesss than 50");
// }else{
//     console.log("temprature is less than 41");
// }

const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); // in block scope we cant not declare varible globly


const  balance = 1000

// if (balance > 500) console.log("test"),console.log("test 2"); // one line execution do not use this is becuase this not wrrite in good way of coding

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy cource");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
