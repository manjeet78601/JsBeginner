//if
const isUserloggedln=true
 // we can check temprature is less & morethan 50 and value is executed 
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

const balance = 1000
if (balance> 500 ) console.log("test");  console.log("test2"); //implicit method 
if(balance < 500){
    console.log("less than 750")
}else if (balance < 750){
  console.log("less than 900");
} else {
    console.log("less than 1200")
}


