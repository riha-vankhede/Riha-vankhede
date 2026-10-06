// Task 2: Spread operator
const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "mango"];
const allFruits = [...fruits, ...moreFruits];

console.log("All Fruits:", allFruits);

// Task 2: Rest operator
function printFruits(...items) {
  console.log("Fruits are:", items);
}
printFruits("apple", "banana", "cherry");
