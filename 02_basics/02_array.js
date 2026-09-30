const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

marvelHeros.concat(dcHeros)
// console.log(marvelHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]

// console.log(allNewHeros);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray);

console.log(Array.isArray("Vijay"));
console.log(Array.from("Vijay"));
console.log(Array.from({name: "Vijay"})); // intresting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500

console.log(Array.of(score1,score2,score2));






