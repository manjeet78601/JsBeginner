
//Map The Map object holds key-value pairs and remembers 
// the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
 //const newNums = myNumbers.map((num)=>{return num +10})
 //chaining method two three method use 
 const newNums = myNumbers
                    .map((num)=> num * 10) 
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
                     console.log(newNums)


//reduce
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
                        
const array1=[1,2,3,4,];
//0+1+2+3+4=10
const intialvalue=0;
const sumwithInitial= array1.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue, intialvalue

);
console.log(sumwithInitial);

 const myNums=[1,2,3]
// const myTotal= myNums.reduce(function(acc,currval){
//    console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// },2)

//console.log(myTotal);

//using Arrow function 

const myTotal= myNums.reduce((acc,curr) => acc+curr, 0)
console.log(myTotal);


const shoppingcart=[
    {
        itemName: "JsCourse",
        price:3999
    },
    {
        itemName: "PyCourse",
        price:4999
    },
    {
        itemName: "JavaCourse",
        price:5999
    },
    {
        itemName: "javaCourse",
        price:6999
    },
    {
        itemName: ".NetCourse",
        price:2999
    },
]
 const priceToPay=shoppingcart.reduce((acc,item)=> acc + item.price,0)
 console.log(priceToPay);