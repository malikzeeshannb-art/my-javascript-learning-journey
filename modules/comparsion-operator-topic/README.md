# JavaScript Day 11 — Comparison Operators

## Topic

Comparison operators in JavaScript:

* `>`
* `<`
* `>=`
* `<=`
* `===`
* `!==`

## What I Learned

Today I learned how to compare values in JavaScript and get a `true` or `false` result.

Comparison operators help us decide whether one value is bigger, smaller, equal, or different from another value.

## Operators

### 1. Greater Than (`>`)

Checks whether the left value is greater than the right value.

```js
console.log(5 > 3); // true
console.log(2 > 9); // false
```

### 2. Less Than (`<`)

Checks whether the left value is less than the right value.

```js
console.log(2 < 7); // true
console.log(10 < 4); // false
```

### 3. Greater Than or Equal To (`>=`)

Checks whether the left value is greater than or equal to the right value.

```js
console.log(5 >= 5); // true
console.log(8 >= 3); // true
console.log(2 >= 6); // false
```

### 4. Less Than or Equal To (`<=`)

Checks whether the left value is less than or equal to the right value.

```js
console.log(4 <= 4); // true
console.log(3 <= 9); // true
console.log(10 <= 2); // false
```

### 5. Strict Equal (`===`)

Checks both value and type.

```js
console.log(10 === 10);   // true
console.log(10 === "10"); // false
```

### 6. Not Equal (`!==`)

Checks whether two values are not equal.

```js
console.log(5 !== 3); // true
console.log(5 !== 5); // false
```

## Why I Prefer `===`

I prefer `===` because it checks both the **value** and the **type**.

This makes it safer and more reliable than `==`, which can do type conversion and sometimes give confusing results.

## Task

Compare two values in the console using comparison operators.

Example practice:

```js
console.log(10 > 5);
console.log(7 <= 7);
console.log(8 === "8");
console.log(9 !== 3);
```

## Checkpoint

**Why prefer `===`?**

Because `===` checks both value and type, which helps avoid unexpected results.

## Common Mistakes I Fixed

* I mixed up **greater than** and **less than** while speaking quickly.
* I learned that `===` is stricter than `==`.
* I understood that `!==` means values are not equal.

## today's topic Summary...

Comparison operators are used to compare values and return a boolean result.
They are a basic but very important part of JavaScript decision making.

---

