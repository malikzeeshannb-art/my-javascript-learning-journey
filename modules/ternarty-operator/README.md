JavaScript Day 19 — Ternary Operator
Topic
Ternary operator
What I learned
The ternary operator is a short way to write a simple if/else statement. It helps us choose between two values based on a condition.
Main idea
Use ternary when the decision is simple and has only two results.
Syntax
condition ? value_if_true : value_if_false
Example
if/else
let marks = 50;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
Ternary version
let marks = 50;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);
Step-by-step conversion
Take the condition.
Add ? after the condition.
Write the value for true.
Add :.
Write the value for false.
When to use ternary
Use ternary when:
the condition is short and simple
there are only two outcomes
the code stays easy to read
When not to use ternary
Avoid ternary when:
the logic is long
the condition becomes confusing
the code would be harder to read than if/else
Important thing I learned
Ternary does not return true or false directly. It returns the value written on the true side or the false side.
Example:
let marks = 30;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result); // Fail
Things that were difficult for me
These were the parts that were hard to keep in mind at first:
understanding that ternary is only for simple decisions
remembering that it gives values, not direct true or false
converting a normal if/else into one-line ternary syntax
knowing when to stop using ternary and go back to if/else
How I understood the hard parts
I learned the difficult parts with help from other AI tools and Google when needed. That helped me clear the confusion and make the concept stick better.
My checkpoint answer
I should prefer if/else when the logic is long.
Final summary
Ternary is a clean shortcut for simple if/else decisions. It is useful when the code needs to stay short, clear, and easy to read.