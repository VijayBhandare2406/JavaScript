function sayMyName (){
    console.log("V");
    console.log("i");
    console.log("j");
    console.log("a");
    console.log("y");
}
// console.log(sayMyName);

// sayMyName - refrance
// sayMayName() - execution

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage (username = "Ajay"){
    // if (username === undefined) {
    if (!username) { // easy way 
        console.log("please enter your username");
        return
    }

    return `${username} just logged in`
}
// console.log(loginUserMessage("Vijay"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 2000));

const user ={
    username: "Vijay",
    price: 199,
}

function handelObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObjects(user)

handelObjects({
    username: "Viju",
    price: 399,
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));


