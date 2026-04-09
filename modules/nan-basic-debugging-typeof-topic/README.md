# JavaScript — `typeof`, `NaN`, and Basic Debugging

## What I learned

I studied how to check data types in JavaScript, how `NaN` works, and how to use `console.log()` for basic debugging.

---

## 1) `typeof`

`typeof` is used to check the type of a value.

### Examples

```javascript
typeof 5        // "number"
typeof "hello"  // "string"
typeof true     // "boolean"
```

### My understanding

`typeof` helps me know what kind of value I am working with before using it in code.

---

## 2) Checking different values

Some values return surprising results in JavaScript.

### Examples

```javascript
typeof []       // "object"
typeof {}       // "object"
typeof null     // "object"
```

### My understanding

* Arrays return "object"
* `null` also returns "object"
* JavaScript has some strange but important behavior here

---

## 3) `NaN` meaning

`NaN` means **Not a Number**.

It appears when JavaScript tries to do math, but the value cannot be converted into a valid number.

### Examples

```javascript
"hello" / 2    // NaN
"abc" * 3      // NaN
```

### My understanding

`NaN` means the calculation failed because the value was not a valid number.

---

## 4) Important fact about `NaN`

Even though `NaN` means **Not a Number**, its type is still:

```javascript
typeof NaN   // "number"
```

### My understanding

This is one of JavaScript’s weird rules. `NaN` is not a valid number value, but JavaScript still treats its type as `number`.

---

## 5) Invalid number cases

A value becomes invalid when JavaScript cannot convert it into a real number.

### Examples

```javascript
Number("123")   // 123
Number("12px")  // NaN
Number("abc")   // NaN
undefined + 5     // NaN
```

### My understanding

If the value contains extra non-numeric characters or is not usable in math, JavaScript gives `NaN`.

---

## 6) Basic debugging with `console.log()`

`console.log()` helps me check values while coding.

### Example

```javascript
let x = "10" / 2;
console.log(x);   // 5
```

### Debugging idea

When something looks wrong, I should print the value and see what JavaScript is actually doing.

### My understanding

Debugging is about checking values step by step instead of guessing.

---

## My mistakes and corrections

### Mistake 1

I first said `typeof false` returns `booleans`.

### Correction

It returns:

```javascript
typeof false   // "boolean"
```

### Mistake 2

I thought `typeof []` and `typeof null` were fully normal object values.

### Correction

They both return "object", but that is a JavaScript quirk and not the whole story.

### Mistake 3

I needed more clarity on `NaN`.

### Correction

`NaN` means **Not a Number**, but its type is still "number".

---

## Final checkpoint answer

### What is `NaN`?

`NaN` means **Not a Number**. It shows up when JavaScript cannot make a valid number from a value. Even then, `typeof NaN` is still "number".

---

## Quick recap

* `typeof` tells the type of a value
* `NaN` means Not a Number
* Invalid math can create `NaN`
* `console.log()` helps with debugging
* JavaScript has some strange type behavior, and I learned to notice it
