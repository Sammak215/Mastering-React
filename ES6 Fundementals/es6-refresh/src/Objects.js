const person = {

    name: 'Mosh',
    // ES6 methods old way
    walk: function() {},
    //new way
    talk() {}
  };
  // when we know the methods
  person.talk();
  person.name = 'Sammak';
  // donot know which method to access
  // access property or method
  const targetMember = 'name';
  person[targetMember.value] = 'Sammak';