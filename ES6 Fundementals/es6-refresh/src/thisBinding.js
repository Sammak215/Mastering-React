
// this is referencing person object 

const person = {
    name: "Most",
    walk() {
      //this sends reference to an current object
      console.log(this);
    }
  };
  
  person.walk();
  
  /* Binding this when we use bind method to a object
  the bind methods takes an object as a argument 
  the function will bind that object to the this keyword 
  in the function definition 
  */
  
  const walk = person.walk.bind(person);
  
  walk(); 
  