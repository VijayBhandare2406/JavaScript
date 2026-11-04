const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumber.map( (num) => num + 10 )

const newNums2 = []
myNumber.forEach( (num) => {
    newNums2.push(num + 10)
} )

const newNums3 = myNumber
    .map( (num) => num * 10 )
    .map( (num) => num + 1 )
    .filter( (num) => num >= 40 ) // true false

// console.log(newNums);
// console.log(newNums2);
console.log(newNums3);
