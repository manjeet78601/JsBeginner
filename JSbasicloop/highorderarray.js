//for of 

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]

//for of (const iterator,num(kuch b de sakte hi) of object){} 
for (const num of arr){
    console.log(num);
} 

const greetings="hello world"
for(const greet of greetings){
   // console.log(`Each char is ${greet}`)
}

//Maps  is unique value i 
const map = new Map() // Map Object holds key value pairs remember the original insertion order of the keyAny Value may be  used as either key or value 
map.set('IN', "India")
map.set('USA', "United States of America");
map.set('Fr', "France");
//console.log(map);

for(const [key,value] of map){
   // console.log(key,':-',value);
}

// const myObject ={
//     game1: 'NFS',
//     game2: 'Spiderman'
// } 
//  for(const [key, value] of myObject){
//     //console.log(key,':-',value);
//  }  
 //myObject is not Iterator 


 const myObject1 = {
    js : 'Javascript',
    cpp: 'c++',
    rb: "ruby",
    swift:"swift by apply"

 }
 for(const key in  myObject1){
    console.log(`${key}shortcut is for ${myObject1[key]}`);
 }
 //for in loop

 const programing=["js", "rb","py","java","cpp"]

 for (const key in programing){
  //  console.log(programing[key]);
 }


 // For Each loop

const coding=["js", "rb","py","java","cpp"]

coding.forEach( function (val){
    console.log(val)
}) // A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
                                    // there are two types of function synchronisation and asynchronisation


                                    // use arrow function with callback function 

                                    coding.forEach((item)=>{
console.log(item);
                                    })


                                    function printMe(item){
 console.log(item);
                                    }
                                    coding.forEach(printMe)

                                    coding.forEach((item, index,arr)=>{
                                        console.log(item,index,arr);
                                    })
const myCoding=[
    {
        languageName: "python",
        languageFileName:"py"
    },
    
    {
        languageName: "Java",
        languageFileName:"java"
    },
    {
        languageName: "Angular",
        languageFileName:"Ang"
    },

   

]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})


