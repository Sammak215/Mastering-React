
// use only const and let 

//Var Scope

// var -> function

/* Variable Declared with var 
keyword is accessible inside the 
function it is defined */

function sayHelloVar() {
    for(var i=0; i<5 ; i++){
      console.log(i);
    }
    console.log(i); // i can also be accessed outside loop 
  } 
  
  sayHelloVar();
  
  // Let Scope 
  
  // let -> block
  
  /* Variable Declared with let 
  keyword is accessible onlt inside the 
  block it is defined */
  
  function sayHelloLet() {
    for(let i=0; i<5 ; i++){
      console.log(i);
    }
    // console.log(i); // i cannot be accessed outside loop 
  } 
  
  sayHelloLet();
  
  //const Scope
  
  // const -> block
  
  /* Variable Declared with const 
  keyword is accessible only inside the 
  block it is defined and cannot be reassigned */
