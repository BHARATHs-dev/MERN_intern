//  arrays.js

const hobbies = ["coding", "reading", "gaming"];

// Accessing
console.log(hobbies[0]); // coding

// Adding
hobbies.push("traveling");
console.log(hobbies);

// Removing
hobbies.pop();
console.log(hobbies);

// Other methods
console.log(hobbies.includes("reading")); // true
console.log(hobbies.indexOf("gaming"));   // 2
