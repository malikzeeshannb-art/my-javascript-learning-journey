# JavaScript Day 29 — Function Parameters

## Topic
Function parameters  
Input values  
Arguments

## Task
Create `greet(name)`

## Step Count
2

## Short Preview
Today I learned how functions accept input values.  
A **parameter** is the placeholder inside the function, and an **argument** is the actual value passed when calling the function.

---

## Step 1 — Input Values in Functions

A function can receive input values.

### Example
```javascript
function greet(name) {
  console.log("welcome back " + name);
}
Explanation
name is a parameter
It is like an empty box inside the function
The function waits for a value to be passed into that box
Calling the function
greet("Ahmed");
Output
welcome back Ahmed
Here:
"Ahmed" is an argument
It is the actual value passed into the function
Step 2 — Using Parameters with Different Arguments
The same function can work with different values.
Example
function greet(name) {
  console.log("welcome back " + name);
}

greet("Ali");
greet("Sara");
greet("Zeeshan");
Output
welcome back Ali
welcome back Sara
welcome back Zeeshan
Explanation
The function stays the same
Only the argument changes
That is why functions with parameters are useful
Difference Between Parameter and Argument
Parameter
Written inside the function definition
Acts like a placeholder
Example: name
Argument
Written when calling the function
The real value passed into the function
Example: "Ahmed"
Simple memory trick
Parameter = box
Argument = value inside the box
Practice Task
Create a function named greet(name) that prints:
Hello, <name>
Example call
greet("Ali");
Expected output
Hello, Ali
Checkpoint
Can you clearly explain the difference between a parameter and an argument?
My Understanding
Parameter is the variable inside the function
Argument is the actual value passed when calling the function
Summary
Functions can take input values
Parameters are inside the function
Arguments are passed when calling the function
One function can work with many different values