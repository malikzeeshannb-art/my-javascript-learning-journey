# 📘 JavaScript Day 35 — Array Methods (Add & Remove Items)

## 🚀 Overview

This project demonstrates how to **add and remove items from arrays** using core JavaScript array methods. The focus is on understanding how arrays behave when modified dynamically.

---

## 📚 Topics Covered

* Adding items to an array
* Removing items from an array
* Working with array indexes
* Modifying arrays without replacing them

---

## 🧠 Array Methods Explained

### 1. `push()`

Adds a new item to the **end** of an array.

```js
let fruits = ["apple", "banana"];
fruits.push("orange");

// Output: ["apple", "banana", "orange"]
```

---

### 2. `pop()`

Removes the **last item** from an array and returns it.

```js
let fruits = ["apple", "banana", "orange"];
let removed = fruits.pop();

// removed: "orange"
// fruits: ["apple", "banana"]
```

---

### 3. `shift()`

Removes the **first item** from an array.

```js
let fruits = ["apple", "banana", "orange"];
fruits.shift();

// Output: ["banana", "orange"]
```

---

### 4. `splice()`

Used to **add, remove, or replace items anywhere** in the array.

#### Remove items:

```js
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1);

// Output: ["apple", "mango"]
```

#### Add items:

```js
let fruits = ["apple", "banana", "mango"];
fruits.splice(2, 0, "orange");

// Output: ["apple", "banana", "orange", "mango"]
```

#### Replace items:

```js
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "orange");

// Output: ["apple", "orange", "mango"]
```

---

## ⚙️ Key Concepts

* Arrays store items using **indexes (starting from 0)**
* Each index holds **only one value**
* Methods like `push()` and `pop()` modify the array **without replacing it**
* `splice()` allows **full control over array modification**

---

## ❗ Important Notes

* Writing a new array like:

```js
fruits = ["apple", "banana", "orange"];
```

👉 This **replaces** the entire array (not recommended for dynamic updates)

* Use methods like `push()` when working with **existing data**

---

## 🧪 Practice Code

```js
let weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday"];

weekDays.push("friday"); 
weekDays.pop(); 
let removedItem = weekDays.pop(); 

console.log(weekDays); 
console.log(removedItem);
```

---

## 🎯 Checkpoint

👉 Which method adds to the end of an array?
✔ Answer: `push()`

---

## 📌 Conclusion

Understanding array methods is essential for handling data in JavaScript.
These methods form the **foundation for real-world applications**, including dynamic lists, user inputs, and data manipulation.

---

## 🔗 Author

**Zeeshan (Frontend Developer Journey 🚀)**
Building strong JavaScript fundamentals step-by-step.
