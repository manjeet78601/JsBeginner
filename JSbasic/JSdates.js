//Dates

let myDate= new Date()
console.log(myDate.toString());  
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025,3, 12,9,17)
let myCreatedDate = new Date("04-12-2025")
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

//Timestamp
let myTimeStamp= Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log (Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})