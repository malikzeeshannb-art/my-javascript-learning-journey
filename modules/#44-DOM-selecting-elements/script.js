// ==============================
// Day 44 — Selecting Elements
// ==============================


// 1. Select element by ID (returns one specific element)
const title = document.getElementById("main-title");
console.log("getElementById:", title);


// 2. Select first matching element using CSS selector
const button = document.querySelector("button");
console.log("querySelector (button):", button);


// 3. Select all matching elements (returns NodeList)
const paragraphs = document.querySelectorAll(".text");
console.log("querySelectorAll (.text):", paragraphs);


// 4. Access specific elements from NodeList using index
console.log("Second paragraph:", paragraphs[1]);


// 5. Select all list items
const items = document.querySelectorAll(".item");
console.log("All list items:", items);


// 6. Access first and last item
console.log("First item:", items[0]);
console.log("Last item:", items[items.length - 1]);


// ==============================
// Key Notes:
// - getElementById → one element (unique ID)
// - querySelector → first matching element
// - querySelectorAll → all matching elements (NodeList)
// ==============================