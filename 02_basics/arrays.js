// Arrays

const myarray = [0, 1, 2, 3, 4, 5]

// const peteservants = ["Choto", "Geenu", "Mithu", "Mozart"]

// const myarray2 = new Array(1, 2, 3, 4)

// console.log(myarray[0]);

// myarray.push(6)
// myarray.pop()
// myarray.unshift(9)
// myarray.shift()
// console.log(myarray.includes(9));
// console.log(myarray.indexOf(3));

const newarr = myarray.join()

console.log(myarray);


console.log(myarray);

console.log(typeof myarray);

// slice splice

console.log("A ", myarray);
const Marva = myarray.slice(1, 3)

console.log(Marva);

console.log("B ", myarray);

const Tayyaba = myarray.splice(1, 3)

console.log(Tayyaba);

console.log("C ", myarray);

const marvel = ["Spiderman", "Daredevil", "MoonKnight"]

const DC = ["Batman", "Superman", "WonderWoman"]

// marvel.push(DC)

// console.log(marvel); 

// console.log(marvel[3][2]);

const heroes = marvel.concat(DC)
console.log(heroes);

const heroesagain = [...marvel, ...DC]

console.log(heroesagain);

const anotherarray = [1, 2, 3, [3, 5, 6, [7, 8, 9, [0, 8]]]]
const anotherarray1 = anotherarray.flat(Infinity)
console.log(anotherarray1);

console.log(Array.isArray("Iqra"));

console.log(Array.from("Iqra"));

console.log(Array.from({name: "Arsum"}));

let score1 = 1000
let score2 = 2000
let score3 = 30000

console.log(Array.of(score1, score2, score3));

















