// Task 3: Scores processing
const scores = [45, 80, 90, 35, 60, 75];

// 1. Filter passing scores (>=50)
const passed = scores.filter(s => s >= 50);

// 2. Add 10 bonus marks
const bonusScores = passed.map(s => s + 10);

// 3. Calculate total
const total = bonusScores.reduce((sum, s) => sum + s, 0);

console.log("Final Total:", total);
