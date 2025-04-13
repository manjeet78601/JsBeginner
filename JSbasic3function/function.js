// console.log("M");
// console.log("A");
// console.log("N");
// console.log("J");
// console.log("E");
// console.log("E");
// console.log("T");

function sayMyName(){
    console.log("M");
console.log("A");
console.log("N");
console.log("J");
console.log("E");
console.log("E");
console.log("T");
}

sayMyName() // sayMyName refrence  & () is execute 

//  function addTwoNumbers(number1, number2){  // inner bracket call parameters
//     console.log(number1 + number2);
//  }

 function addTwoNumbers(number1, number2){          // inner bracket call parameters
    let result = number1 + number2

    // console.log("manjeet");
    // return result   //after  return result  nothing is executed. when we put the equation upper return result the equation is executed 
    //  2nd method
    //  return number1 + number2
 }

  const result = addTwoNumbers(3,6);  //inner this bracket under number argument 
 //console.log("Result:", result);

  function loginUserMessage(username="Man"){
    // if(username===undefined)  donoo me se koi b likh sakte hi hum 
      if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
  }

  loginUserMessage("Manjeet") // output not shown 
    console.log(loginUserMessage("Manjeet"))
    console.log(loginUserMessage())