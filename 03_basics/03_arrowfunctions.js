const user = {
    username: "Vijay",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website `);
        console.log(this); // displaying current value (contest)
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Vijay"
//     console.log(this.username);
// }

// chai()


// const chai = function (){
//     let username = "Vijay"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "Vijay"
//     console.log(this.username);
// }

// chai()



const addTwo = (num1, num2) => {
    return num1 + num2 // in that ( curly bracess ) syntax need to use return keyword
}

const addTwo2 = (num1, num2) => num1 + num2 // in that single line arrow function syntax no need to use return keyword
const addTwo3 = (num1, num2) => (num1 + num2) // we cam also wrap this into parenthesis

const addTwo4 = (num1, num2) => ({username: "Vijay"}) // this will work -- {username: "Vijay"} without parenthesis return object in arrow function will not work 

console.log(addTwo(3, 4))
console.log(addTwo2(3, 4))
console.log(addTwo3(3, 4))
console.log(addTwo4(3, 4))