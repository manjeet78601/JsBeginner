// let a= 10
// const b = 20
// var c =30
 var c = 300 // outer bracket global scope
if(true){  //inner bracket block scope 
    let a= 10
    const b = 20
  // console.log("Inner", a);
}

// for(let i = 0; i < array.length; i++){
//     const element = array[i];
// }
//console.log(a);
//console.log(b);
// console.log(c);

function one(){

    const username="Manjeet"

function two(){
 const websites= "youtube"
 console.log(username);

    }
   // console.log(websites);
    two()

}
//one()

if(true){
    const username="Manjeet"
    if(username==="Manjeet"){
        const websites="youtube"
       // console.log(username + websites)
    }
//console.log(websites);
}
//console.log(username);


//+++++++++++++interesting ++++++++++++++
addone(5)
//console.log (addone(5))

function addone(num){  //jab humne variable(addone(5) down se upper declare kiya to first wala compile ho gya aur second wala error show kr rha hi but   
    return num +1
}
addtwo(5)
const addtwo = function(num){
    return num +2
}
// addtwo(5);
