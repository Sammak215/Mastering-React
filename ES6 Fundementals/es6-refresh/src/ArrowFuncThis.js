// Arrow Function and this
// dont rebind this

const person = {
    talk() {
      // we got window object for this because timeout is callback function with any part of object
      // Arrow function let this inherits by default to the context object and dont let this rebind 
      setTimeout(() => {
        console.log("this", this);
      }, 1000);
    }
  };
  
  person.talk();