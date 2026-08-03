// Objects
// Singleton objects/construction method
// object literalls

const mysym = Symbol("Key1")

const js_user = {
    name: "Marva",
    "Full name": "Marva Arsum",
    age: 26,
    location: "Peshawar",
    email: "marvasalim999@gmail.com",
    IsloggedIn: false,
    Lastlogin: ["Monday", "Tuesday"],
    [mysym]: "Key1"


}


console.log(js_user.name);
console.log(js_user["location"]);
console.log(js_user["Full name"]);
console.log(js_user[mysym]);

js_user.email ="basraarsum@gmail.com"
// Object.freeze(js_user)
js_user.email ="petethepretty"
console.log(js_user);

js_user.greeting = function(){
    console.log("Hey Marva");
    
}
js_user.greeting2 = function(){
    console.log(`Hey Marva, ${this.location}`);
    
}

// console.log(js_user.greeting());
// console.log(js_user.greeting2());

console.log(js_user.greeting());
console.log(js_user.greeting2());




