
// this is referencing person object 

const person = {
    name: "Most",
    walk() {
      //this sends reference to an current object
      console.log(this);
    }
  };
  
  person.walk();
  
  /* this dosent refernce function object 
  it referencing the global object because a reference is 
  passed not the object itself */
  const walk = person.walk;
  
  walk(); 
  