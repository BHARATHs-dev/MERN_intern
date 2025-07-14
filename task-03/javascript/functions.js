// functions.js

// Normal function
function sayHello(name) {
  return "Hi " + name;
}

console.log(sayHello("Bharath"));

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));

// Callback example
function greetUser(name, callback) {
  const message = callback(name);
  console.log(message);
}

greetUser("Bharath", sayHello);
