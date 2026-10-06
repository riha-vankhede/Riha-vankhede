// Mini Challenge: Student Score Analyzer
const students = [
  { name: "Aman", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Riya", marks: 68 },
  { name: "John", marks: 49 }
];

// 1. Filter passed students (>=50)
const passed = students.filter(s => s.marks >= 50);

// 2. Add +5 bonus marks
const updated = passed.map(s => ({ name: s.name, marks: s.marks + 5 }));

// 3. Log each student's name and final score
updated.forEach(s => console.log(`${s.name}: ${s.marks}`));

// 4. Calculate class average
const average = updated.reduce((sum, s) => sum + s.marks, 0) / updated.length;
console.log("Class Average:", average);
