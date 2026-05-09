# JavaScript Day 30 — Return Values

## Topic

**Return values in JavaScript functions**

## Goal of the lesson

Learn how a function sends a result back using `return`, how that is different from `console.log()`, and how to use the returned value later in code.

---

## What is a return value?

A **return value** is the result a function gives back after it finishes its work.

Think of a function like a small machine:

* you give it input
* it does some work
* it gives back output

That output is called the **return value**.

---

## What does `return` do?

`return` sends a value back from the function.

Example:

```javascript
function add() {
  return 2 + 3;
}
```

Here, the function gives back `5`.

---

## Very important rule

When JavaScript reaches `return`:

* the function **stops immediately**
* nothing after `return` runs inside that function

Example:

```javascript
function test() {
  return 10;
  console.log("This will not run");
}
```

The `console.log()` will not run because the function already ended.

---

## `return` vs `console.log()`

These two are not the same.

### `console.log()`

* shows a value in the console
* does **not** send the value back from the function
* usually used for checking output

### `return`

* sends the value back
* can be stored in a variable
* can be used later in the code

Example:

```javascript
function add() {
  return 2 + 3;
}

let result = add();
console.log(result);
```

`result` becomes `5`.

---

## How returned values are used

A returned value can be:

* stored in a variable
* printed with `console.log()`
* used in another calculation
* passed to another function

Example:

```javascript
function add(a, b) {
  return a + b;
}

let total = add(4, 6);
console.log(total);
```

Output:

```javascript
10
```

---

## Function parameters and return values

Parameters are the inputs inside the function.

Example:

```javascript
function sum(a, b) {
  return a + b;
}
```

Here:

* `a` is the first input
* `b` is the second input
* `return a + b` gives back the answer

Call it like this:

```javascript
let result = sum(4, 6);
console.log(result);
```

---

## Example 1 — Add two numbers

```javascript
function add(a, b) {
  return a + b;
}

let result = add(4, 6);
console.log(result); // 10
```

---

## Example 2 — Multiply two numbers

```javascript
function multiply(x, y) {
  return x * y;
}

let result = multiply(3, 4);
console.log(result); // 12
```

---

## Example 3 — Square a number

```javascript
function square(n) {
  return n * n;
}

let result = square(5);
console.log(result); // 25
```

---

## Common mistakes

### Mistake 1: Writing fixed values instead of parameters

Wrong:

```javascript
function sum() {
  return 4 + 6;
}
```

This always gives the same answer.

Better:

```javascript
function sum(a, b) {
  return a + b;
}
```

---

### Mistake 2: Using the wrong operator

For square, you must multiply:

```javascript
function square(n) {
  return n * n;
}
```

Not divide.

---

### Mistake 3: Writing a number as a parameter name

Wrong:

```javascript
function square(5) {
  return 5 * 5;
}
```

Parameters must be variable names like `n`, `x`, `a`, or `b`.

---

## Short memory trick

* `console.log()` = show it
* `return` = give it back

---

## Mini task ideas

1. Create a function that adds two numbers.
2. Create a function that multiplies two numbers.
3. Create a function that squares one number.

---

## Final summary

Return values are one of the most important parts of functions.
They let a function send a result back so it can be used later.

### Remember:

* `return` sends the value back
* the function stops after `return`
* the value can be stored in a variable
* `console.log()` only displays output

---

## Day 30 one-line note

**A function uses `return` to send back a result, and that result can be stored and used later.**
