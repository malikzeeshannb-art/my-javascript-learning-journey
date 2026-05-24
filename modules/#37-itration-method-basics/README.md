# Day 37 — Array Iteration Methods

## Topic

Array iteration methods, with focus on `map()`.

## Goal

Convert names to uppercase by using `map()`.

---

## What I Learned

Array iteration methods help JavaScript go through array items one by one.

`map()` is one of the most important array iteration methods.
It goes through every item in an array and returns a **new array**.
It does **not** change the original array.

---

## Core Idea

When `map()` runs, it gives each item to the function one by one.
Inside the function, the parameter name can be anything:

* `num`
* `name`
* `item`
* `x`
* `value`

These are just placeholder names.
They receive one array item at a time.

---

## Simple Syntax

```js
let newArray = oldArray.map(function(item) {
    return item;
});
```

### Meaning

* `oldArray` = original array
* `map()` = loops through the array
* `item` = current value from the array
* `return` = value that will go into the new array

---

## Example

```js
let names = ["ali", "zain", "hamza", "jammal", "fahad", "hannan"];

let result = names.map(function(name) {
    return name.toUpperCase();
});

console.log(result);
```

### Output

```js
["ALI", "ZAIN", "HAMZA", "JAMMAL", "FAHAD", "HANNAN"]
```

---

## How It Works Step by Step

For this array:

```js
["ali", "zain", "hamza"]
```

`map()` works like this:

* first item: `name = "ali"` → return `"ALI"`
* second item: `name = "zain"` → return `"ZAIN"`
* third item: `name = "hamza"` → return `"HAMZA"`

The returned values are collected into a new array.

---

## My Mistakes and What They Taught Me

### 1) I thought iteration means all items at once

That was not correct.

### Correct idea

Iteration means one item at a time.
It only feels fast, so it looks like everything happens together.

---

### 2) I thought `map()` changes the original array

That was also wrong.

### Correct idea

`map()` creates a **new array**.
The original array stays safe and unchanged.

---

### 3) I thought the parameter like `num` is empty

That was the biggest confusion.

### Correct idea

`num` is a **parameter**.
`map()` fills it automatically with one array item at a time.

So this:

```js
numbers.map(function(num) {
```

means:

* `num` is not manually assigned
* `map()` gives it values one by one

---

### 4) I thought `return` might not matter much

That was wrong.

### Correct idea

`return` is essential.
Whatever is returned goes into the new array.
If there is no `return`, the result becomes `undefined` for each item.

---

### 5) I mixed up “parameter” and “variable”

That made the concept harder than it needed to be.

### Correct idea

Inside `map()`, the name inside the function is a **parameter**.
It behaves like a temporary holder for each current array item.

---

## My Weak Areas

* I need more practice understanding how functions receive values automatically.
* I sometimes confuse a parameter with a normal variable.
* I need to remember that `map()` always returns a new array.
* I need to pay more attention to `return` because it controls the output.

---

## Strong Understanding I Built

Now I understand these points clearly:

* `map()` works one by one
* The parameter receives each item automatically
* `return` sends the transformed value into a new array
* `map()` is useful for changing values in an array
* `map()` does not modify the original array

---

## Important Memory Line

> `map()` gives each array item to the parameter automatically, one by one, and whatever is returned becomes part of the new array.

---

## Final Practice Code

```js
let names = ["ali", "zain", "hamza", "jammal", "fahad", "hannan"];

let result = names.map(function(name) {
    return name.toUpperCase();
});

console.log(result);
```

---

## Checkpoint Answer

### Question:

What does `map()` return?

### Answer:

`map()` returns a **new array**.

---

## One-Line Summary

`map()` is used to transform each item in an array and create a new array from the results.
