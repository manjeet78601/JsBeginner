//Array

const myArr= [0,1,2,3,4,5]
const myHeros=["SHaktimaan","batman","Superman"]

const myArr2= new Array(1,2,3,4);
// console.log(myArr[1]);


//Array Methods invetgating study 

// myArr.push(6) // last me value ko add krta hi 
// myArr.push(7)
// myArr.pop() //last value ko remove krta hi 

//myArr.unshift(9)// value ko start me add krta hi 
//myArr.shift() // start ki value ko remove krta hi 
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr= myArr.join() // join array ko bind kr diya aur string me convert kr diya 
// console.log(myArr);
// console.log(typeof newArr);

//Slice Splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);

// Marvel heros

const Marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flashman","batman"]
Marvel_heros.push(dc_heros);
// console.log(Marvel_heros);
// console.log(Marvel_heros[3][1]);

Marvel_heros.concat(dc_heros)
console.log(Marvel_heros);

const allHeros = Marvel_heros.concat(dc_heros);
console.log(allHeros);

//Spread operator

const all_new_heros = [...Marvel_heros,...dc_heros]

console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
console.log(Array.isArray("Manjeet"))
console.log(Array.from("Manjeet"))
console.log(Array.from({name:"Manjeet"})) // interesting 

let score1 = 100
let score2=200
let score3=300
 console.log(Array.of(score1,score2,score3));