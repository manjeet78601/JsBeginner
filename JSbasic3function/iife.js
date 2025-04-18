//Immediatley invoked Function Expression (IIFE)

(function codewitmanjeet(){ // named iife 
    console.log(`DB CONNECTED`);

})();

//two iffe write in function but then cannot execute due to semicolon()

( (name)=>{ // unnamed iife
    console.log(`DB CONNECTED TWo ${name}`);
})('Manjeet')
//('name')
//codewitmanjeet()