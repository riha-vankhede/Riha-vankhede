// Task 1: Prices filter + discount
const prices = [120, 250, 300, 450, 600];

// 1. Filter prices greater than 250
const filtered = prices.filter(p => p > 250);

// 2. Apply 10% discount
const discounted = filtered.map(p => p * 0.9);

console.log("Original Prices:", prices);
console.log("Filtered Prices:", filtered);
console.log("Discounted Prices:", discounted);
