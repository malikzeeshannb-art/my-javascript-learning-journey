# JavaScript Day 32 — Scope Basics

## Topics
- Global scope
- Local scope

## What I learned
Scope tells us where a variable can be used in JavaScript.

- **Global scope** means the variable is declared outside a function and can be used almost anywhere.
- **Local scope** means the variable is declared inside a function and can only be used inside that function.

---

## Global Scope

A variable declared outside any function is a **global variable**.

### Example
```javascript
let name = "Zeeshan";

function greet() {
  console.log(name);
}

greet();
console.log(name);
Key point
Global variables can be used inside functions and outside functions.
Local Scope
A variable declared inside a function is a local variable.
Example
function test() {
  let age = 22;
  console.log(age);
}

test();
console.log(age); // Error
Key point
Local variables can only be used inside the function where they are declared.
Important Rule
One function cannot directly use another function’s local variable.
Example
function first() {
  let secret = "hidden";
}

function second() {
  console.log(secret); // Error
}
Why?
Because secret exists only inside first().
Better Practice
Instead of using too many global variables, use:
function parameters
return values
Example
function first() {
  let secret = "hidden";
  return secret;
}

function second(value) {
  console.log(value);
}

let data = first();
second(data);
Checkpoint
Why can’t every variable be used everywhere?
Because JavaScript uses scope to control where variables are accessible.
Final Summary
Global scope → accessible everywhere
Local scope → accessible only inside the function
Scope helps keep code organized and prevents variable conflicts