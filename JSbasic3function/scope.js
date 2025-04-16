// let a= 10
// const b = 20
// var c =30
 var c = 300 // outer bracket global scope
if(true){  //inner bracket block scope 
    let a= 10
    const b = 20
   console.log("Inner", a);
}

// for(let i = 0; i < array.length; i++){
//     const element = array[i];
// }
console.log(a);
//console.log(b);
// console.log(c);