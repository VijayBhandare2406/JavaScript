// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Vijay";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Vijay",
            lastname: "Bhandare"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {3:"a", 4:"b"}

// const obj4 = { obj1, obj2 }
// const obj5 = Object.assign({}, obj1, obj2, obj3 )

const obj4 = { ...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "vijay@gmail.com"
    },
    {
        id: 2,
        email: "vijay@google.com"
    },
    {
        id: 3,
        email: "vijay@chatgpt.com"
    },
    {
        id: 4,
        email: "vijay@tinder.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseIntructor: "Vijay",
}
console.log(course);

const {courseIntructor: intructor} = course

console.log(intructor);



