const user ={
    username: "Manjeet",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username},welcome to websites`); //this keyword create a currenct context
 console.log(this);
    }

}
// user.welcomeMessage()
// user.username="Maan"
// user.welcomeMessage()
                         // global Object in javascript windowobjec
console.log(this);

function codewithmanjeet(){

   console.log(this);
}
//codewithmanjeet();

// const codewithmanjeet = function(){
//     let username = "Manjeet"  //agar humne let username declare kiya to this.username undefine ayega
//     console.log(this.username);
// }
// codewithmanjeet();

// const codewithmanjeet=()=>{
//     let username= "Manjeet"
//     console.log(this.username);
// }
//codewithmanjeet()


// basic arrow function 
// const addTwo=(num1, num2)=>{
//     return num1 + num2  //explictyly return 
// }
// console.log(addTwo(3,4))

//implicit return 
// const addTwo=(num1, num2) =>  num1 + num2
//or
//const addTwo=(num1,num2)=> (num1 + num2)
//or
const addTwo=(num1,num2)=> ({username: "Manjeet"})
console.log(addTwo(3,4))
 // Array function 
// const myArray = [2,5,,3,7,8]
// myArray.forEach()

//one more time review  arrow function 

//