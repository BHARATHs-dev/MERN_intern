// objects.js

const person = {
  name: "Bharath",
  age: 20,
  greet: function () {
    console.log("Hello, I am " + this.name);  //Hello, I am Bharath
  }
};

// Accessing properties
console.log(person.name);      // Bharath
console.log(person["age"]);    // 20

// Calling method
person.greet();
