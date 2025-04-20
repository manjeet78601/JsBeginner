//For Loop 

for(let i=0; i <=10; i++){
  //  const element= i;
   // if(element==5){
        //console.log("5 is best number");
  //  }
    // const element = array[index];
    //console.log(element);
}
for(let i=1; i <=10; i++){
    //console.log(`Outer loop value:${i}`);
    for(let j=2; j<=10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
 // tabel  we have display 
      //  console.log(i + '*' + j + ' = ' + i*j);
    }
//console.log(element);  

       
    }
//Array using loop 

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++){ // when we write <= to yeh array ke bahar chala jayaga
     const element = myArray[index];
    console.log(element);
}

//  break  & continue

for(let index=1; index<=20; index++){
    if(index==5){
        console.log(`Detected 5`)
        break;
    }
 console.log(`value of i is ${index}`);


}
for(let index=1; index<=20; index++){
    if(index==5){
        console.log(`Detected 5`)
        continue;
    }
 console.log(`value of i is ${index}`);


}
