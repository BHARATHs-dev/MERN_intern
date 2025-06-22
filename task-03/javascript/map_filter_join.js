// map_filter_join.js

const numbers = [1, 2, 3, 4, 5];

// map
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

// filter
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

// join
const joined = numbers.join(", ");
console.log("Bharath's numbers:", joined);  //Bharath's numbers: 1, 2, 3, 4, 5
