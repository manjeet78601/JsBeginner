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

// Object Singleton with constructor

//const tinderUser = new Object()
const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

//console.log(tinderUser);
const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"manjeet",
            lastname:"Singh"
        }

    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


//const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

//Spread operator

 const obj3 ={...obj1, ...obj2,...obj4}
//console.log(obj3);

const users = [
    {
        id:1,
        email: "M@gmail.com"
    },
    {
        id:1,
        email: "M@gmail.com"
    },
    {
        id:1,
        email: "M@gmail.com"
    },
    {
        id:1,
        email: "M@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('islogged'));

// destructuring in Object  change the name in coursedestructure to instructor 

const course={
    coursename:"js in javascript",
    price:"999",
    courseInstructor:"Manjeet"
}
//course.courseInstructor

const {courseInstructor: instructor}= course
//console.log(courseInstructor);
console.log(instructor);

//destructring in reactjs
// const navbar=({company}) => {  

// }
// navbar(company)= "manjeet"

//Json Api with object 
// {
//     "name" : "Manjeet",
//     coursename: "js in english",
//     price : "free"
// }

[
    {},
    {},
{}
]