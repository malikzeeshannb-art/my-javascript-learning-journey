# 📘 JavaScript Day 16 — Else If

## 📌 Overview
In this lesson, I learned how to use `else if` in JavaScript to handle multiple conditions and control program flow more effectively.

---

## 🧠 Key Concept: `else if`

The `else if` statement is used when we need to check more than two conditions.

It allows JavaScript to:
- Check conditions from top to bottom
- Stop execution when the first true condition is found
- Return only one final result

---

## 🔄 Syntax

```javascript
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // code
}
🎯 Example: Grading System
let marks = 85;

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 80) {
  console.log("B grade");
} else if (marks >= 70) {
  console.log("C grade");
} else if (marks >= 60) {
  console.log("D grade");
} else {
  console.log("Fail");
}
✅ Output:
B grade
⚠️ Why Not Use Only if?
Using multiple if statements can cause multiple outputs:
let marks = 85;

if (marks >= 60) {
  console.log("D");
}
if (marks >= 70) {
  console.log("C");
}
if (marks >= 80) {
  console.log("B");
}
❌ Output:
D
C
B
🚫 Problem:
All true conditions run
Multiple results are printed
Not suitable for grading systems
✅ Why Use else if?
Ensures only one block runs
Stops checking after the first true condition
Provides a clear and accurate result
🧩 Key Takeaways
Use else if when you have multiple conditions
JavaScript checks conditions in order (top → bottom)
Only the first true condition executes
Avoid using multiple if statements for single-result logic
🚀 Progress
✔️ Learned how to handle multiple conditions
✔️ Built a grading system
✔️ Understood why else if is necessary