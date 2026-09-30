// # Primitive datatypes

/*
    7 types : String, Number, Boolean, null, undefined, symbol, BigInt


    Reference ( Non premitive dataTypes ) : -
    Array, objects, Functions

*/

// number define
const score = 100;
const scoreValue = 100.4;

// Boolean type
const isLoggedIn = false;
const outsideTemp = null;

// undefined type
let userEmail;

// symbol type
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// BigInt type
const bigNumber = 2375035028750289375n;


// *************** Array, Objects, Functions ************

// array can wrrite in squre bracket
const heros = ["shaktiman","naagraj","doga"]; 

// Objects can wrrite in curly brases
let myObj = {
    name:"Vijay",
    age:27,
    email:"Vijay@google.com",
}


// defination of function = funcation(){}

const myFunction = function(){
    // console.log("Hello World");
}

// how to find date types
// console.log(typeof heros);


// *************************************************************

/*
    stack (Primitive)   |   heap (Non Primitive)
    ---------------------------------------------------
    using stack to get  |   using heap to get orignal         
    copy of memory      |   data refrance
*/

let myYoutubename = "vijaybhandare.com"
let anotherName = "bhandarevijay"
anotherName = "VijayVijay"

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email: "vijay@google.com",
    upi: "142erded@ybl"
}

let userTwo = userOne;

userTwo.email = "ajay@google.com"

console.log(userOne.email);
console.log(userTwo.email);
