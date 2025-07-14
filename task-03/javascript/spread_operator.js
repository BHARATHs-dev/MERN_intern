// spread_operator.js

const fruits = ["apple", "banana"];
const newFruits = [...fruits, "mango"];

console.log(newFruits); // ["apple", "banana", "mango"]

const user = { name: "Bharath", age: 20 };
const updatedUser = { ...user, city: "Chennai" };

console.log(updatedUser); // { name: "Bharath", age: 20, city: "Chennai" }

function showNames(...names) {
  console.log("Names:", names);
}

showNames("Bharath", "Ravi", "kutty");  //Names: [ 'Bharath', 'Ravi', 'kutty' ]
