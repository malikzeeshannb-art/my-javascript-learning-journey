📘 Day 34 — JavaScript Arrays Basics
📌 Overview
In this lesson, I learned the fundamentals of arrays in JavaScript. Arrays are used to store multiple values inside a single variable, making code cleaner and more efficient.
🧠 Topics Covered
Array
Index
Length
📦 What is an Array?
An array is a collection of multiple values stored in one variable.
let favoriteThings = ["banana", "apple", "BMW", "airplane", "iPhone"];
Uses square brackets []
Items are separated by commas ,
🔢 What is Index?
Index represents the position of items in an array.
⚠️ JavaScript starts counting from 0
Example:
let fruits = ["apple", "banana", "mango"];
Item	Index
apple	0
banana	1
mango	2
📏 What is Length?
length tells the total number of items in an array.
console.log(fruits.length); // Output: 3
Length counts items, not index
Last index = length - 1
💻 Task Completed
Created an array of favorite things and displayed it:
let favoriteThings = ["banana", "apple", "BMW", "airplane", "iPhone"];

console.log(favoriteThings);
console.log(favoriteThings.length);
✅ Key Learnings
Arrays store multiple values in one variable
Index starts from 0
length returns total number of items
Last index is always length - 1
🎯 Checkpoint Answers
Index 0 → First item (banana)
Last index → 4 (because total items are 5)