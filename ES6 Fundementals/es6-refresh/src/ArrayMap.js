// Array Map method

// use to render list of items in react

const colors = ['red','green','blue'];
//const items = colors.map( color  => '<li>' + color + '</li>');

// Template literals
const items = colors.map( color  => `<li>${color}</li>`);

console.log(items);