// primitive

// Types: 7. String, Boolean, Null, Number, undefined, symbols, BigInt 


const score = 100
const scoreval = 100.3

const IsloggedIn = false
const OutsideTem = null

let UserEmail;

const id = Symbol('1234')
const anotherid = Symbol('1234')

console.log(id === anotherid);

const bignumber = 4557868234567n

// upar wala big int men gya hai




//Non-primitive (Reference)

// Array, Objects, Functions

const hero = ["Marva", "Tayyaba", "MarvaSalim"];

// ye upar wala Array

let Obj = {
    name: "Marva",
    age: 26,
}

// ye upar wala object hai

const MyFunc = function name(params) {
    console.log("Hellow World");
    
    
}

console.log(typeof bignumber);

console.log(typeof OutsideTem); 

// iska object atta hai

console.log(typeof score);

console.log(typeof MyFunc);





