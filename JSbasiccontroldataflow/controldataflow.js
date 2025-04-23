//if
const isUserloggedln=true
 // we can check temprature is less & more than 50 and value is executed 
const temprature= 35
if (temprature <50){
    console.log("less than 50");
}else{
console.log("temperature is greater than 50")
}
console.log("Executed");

// if(2=="2"){ // == o/p executed === not answer cannot  define 
//     console.log("executed") 

// }


//cmparison operator

//'< , >, <=, >=, ==,!=, ===


const score =200
if(score){
    if(score>100){
        const power= "fly"
        console.log(`userpower: ${power}`); // program is executed 
        // but the line we can put it on outer bracket its undefine
    }
    //console.log(`userpower: ${power}`); 
}


//shorthand notice

// const balance = 1000
// if (balance> 500 ) console.log("test");  console.log("test2"); //implicit method 
// if(balance < 500){
//     console.log("less than 750")
// }else if (balance < 750){
//   console.log("less than 900");
// } else {
//     console.log("less than 1200")
// }


const Userloggedln= true
const debitcard= true
const loggedInFromGoogle = false
const loggedfromEmail = true

if (loggedInFromGoogle|| loggedfromEmail){
    console.log("user logged in")
}
// if (Userloggedln && debitcard && 2==3){  //statement false then hum uske ander jate hi nahi hi eg 2==3 
//     console.log("Allow to buy course");
// }


// switch case 
//  switch (key){ // basic syntax in switch case 
//     case value: 
//     break;

//     default: break;
//  } 


//shortcut method by key board shif+alt+ downarrow
// const month = 3
const month = "april" //"string value ko kaise compare krna hi  "
switch (month){
    case "jan":
        console.log("January")
        break ;
    case "feb":
        console.log("feb")
        break ;
    case "march":
        console.log("March")
        break ;
    case "april":
        console.log("April")  // agar break block ho to after sara ka sara code execute ho jata 
        break ;
    default:
        console.log("default case match ")
        break ;
      
}

//truth value false
//  falsy values 
//  false,0,-0 BigInt 0n,"", null undefine , NaN

// truthy values
//  inner string value  "0",'false',"",[],{}, function(){}

// if(userEmail.length ===0){
//     console.log("Array is empty"); // Array is empty 
// }

// const emptyObj ={}
// if(Object.keys(emptyObj).length){
//     console.log("Object is empty") //object is empty 

// }
const userEmail="h@hitesh.ai"
if(userEmail){
    console.log("got user Email");
} else {
    console.log("Don't have user EMail");
}


//logical operation 


//&& means sari ki sari value true ani chaiyea

//nullish coalescing Operator(??):null, undefined
let val1;
// val1= 5 ?? 10
    //  which value assign 5 ?? 10 5 hogi   aur null k case me number ya string check hoga but aur unm se koi value hogi 
//val1= null ?? 10

//val1 = undefined ?? 15 // undefine me  b value 15 hoga value 


val1= null ?? 10 ?? 20 // after null jo value number me mile to wo assign hoti hi 

console.log(val1);

//Ternary Operation 
//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



