// singleton
// object.create
// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Vijay",
    "full name": "Vijay Bhandare",
    mySym:"mykey1",
    age: 27,
    location:"kolhapur",
    email: "Vijay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);

// JsUser.email = "Vijay@123"
// Object.freeze(JsUser)
// JsUser.email = "Vijay@000"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());