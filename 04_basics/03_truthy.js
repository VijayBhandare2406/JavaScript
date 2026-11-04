const userEmail= "Vijay@ai"
const userEmail2= ""
const userEmail3= []

// if (userEmail) {
//     console.log("Got user email");
// }else{
//     console.log("Don't have a user email");
// }
// this is called truthy value 

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail3.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");  
// }

// Nullish Coalescing Operator (??): null, undefind

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20
 

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// terniary Operator

// Condition ? true : false

const iceTeaprice = 100

iceTeaprice >= 100 ? console.log("less than 80") : console.log("more than 80");

