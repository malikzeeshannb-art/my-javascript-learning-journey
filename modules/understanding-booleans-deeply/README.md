JavaScript Study Journey — Booleans
Topic: true/false, truthy/falsy
Task: Make 5 true/false conditions
Checkpoint: What values are considered falsy?
1. Concepts Learned
Booleans are the foundation of decision-making in JavaScript:
They can have only two values: true or false.
They allow the program to make decisions based on conditions.
Truthy and Falsy Values:
JavaScript treats some values automatically as true or false in conditional checks.
Falsy values: false, 0, "" (empty string), null, undefined, NaN, 0n
Everything else is truthy.
Comparison Operators:
== → Loose equality: checks values only, ignores type.
=== → Strict equality: checks value + type, everything must match.
> / < → Compare numbers or strings (basic comparison).
2. Mistakes & Corrections
Falsy identification mistake:
Initial answers included “mismatching value” or “numbering to string,” which are not falsy in JS.
Correct falsy values are only: false, 0, "", null, undefined, NaN, 0n.
String comparison with case:
"shani" === "Shani" → false, because strict equality checks both value and type.
Remember: even one character difference or capitalization mismatch makes === return false.
Loose equality:
5 == "5" → true, because type is ignored, only value matters.
Falsy vs. truthy:
0 is falsy, " " (space string) is truthy.
Important: not everything “empty-looking” is falsy — only exact falsy values listed above.
3. 5 True/False Condition Examples
// 1) Age Check
console.log(20 > 18);   // true

// 2) Price Comparison
console.log(5 < 3);     // false

// 3) Strict equality
console.log("shani" === "shani");   // true

// 4) Case mismatch
console.log("shani" === "Shani");   // false

// 5) Loose equality
console.log(10 == "10");   // true
4. Key Takeaways
Booleans are core to JS logic — every decision is built on true/false.
Always memorize the 7 falsy values. Everything else is truthy.
Use == when you only care about value, === when both type and value matter.
Strings are case-sensitive; even one difference affects equality.
Comparison operators (>, <) let you enforce conditions in real-world logic like age checks or price comparisons.
✅ Day 8 Complete — Knowledge locked, mistakes corrected, examples implemented.