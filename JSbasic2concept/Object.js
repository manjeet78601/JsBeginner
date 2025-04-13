//Singleton
//Object.create //can create a singleton with constructor 

//Object literal 

 const mySym= Symbol("key1")

const JSuser={

    name: "Manjeet",
    "full name": " Manjeet Singh",
    [mySym]: "mykey1",
    age:20,
    location:"Punjab",
    email: "manjeet@google.com",
    isloggedIn: false,
    lastLoginDays:["Monday", "Saturday"],

}
// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(JSuser[mySym])
JSuser.email = "manjeet@chatgpt.com"
//Object.freeze(JSuser)
JSuser.email = "manjeet@microsoft.com"
console.log(JSuser);

//Function add in object
JSuser.greeting = function(){
    console.log("Hello JS user");
}
JSuser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());




