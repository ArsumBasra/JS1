// Dates //

// let mydate = new Date()

// console.log(mydate);

// console.log(mydate.toString());

// console.log(mydate.toLocaleDateString());

// console.log(mydate.toDateString());

// console.log(mydate.toLocaleString());

// console.log(typeof mydate);

// console.log(mydate.toISOString());

// console.log(mydate.toJSON());

// console.log(mydate.toLocaleTimeString());

// console.log(mydate.toTimeString());

// console.log(mydate.toUTCString());

let mycreateddate = new Date(2019, 6, 20, 5, 6)

// console.log(mycreateddate);

// console.log(mycreateddate.toLocaleString());

// let mycreateddate1 = new Date("08-04-2006")

// console.log(mycreateddate1.toLocaleString());

let mytimestamp = Date.now()

console.log(mytimestamp);

console.log(mycreateddate.getTime());

console.log(Date.now());

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(new Date);

console.log(newdate);

console.log(newdate.getMonth() + 1);

console.log(newdate.getDay());

// `${newdate.getDay()} and the time`

newdate.toLocaleString('Default', {
    weekday: "long", 
    
})




































