# 📘 JavaScript Day 18 — Truthy & Falsy Values

## 📍 Topic Overview
Today I learned how JavaScript treats different values inside conditions using **truthy** and **falsy** concepts.

---

## 🧠 Step 1: Understanding Falsy Values

Falsy values are those that automatically become `false` in conditions.

### ✅ Falsy Values List:
- `""` (empty string)
- `0`
- `null`
- `undefined`
- `false`
- `NaN`

### 💡 Key Concept:
If any of these values are used inside an `if` condition, the block will **not run**.

---

## 🧠 Step 2: Testing Values in Conditions

I used `if...else` to test different values.

### 📌 Example:
```javascript
let value = 0;

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
🧪 Results:
"" → Falsy
0 → Falsy
null → Falsy
undefined → Falsy
false → Falsy
🧠 Step 3: Type Coercion (Auto Conversion)
JavaScript automatically converts values into boolean using:
Boolean(value)
📌 Example:
if (value)
Internally becomes:
if (Boolean(value))
🧠 Step 4: Truthy Values
All values except falsy ones are truthy.
✅ Examples:
" " (space) → Truthy
"hello" → Truthy
10 → Truthy
"0" → Truthy
[] → Truthy
{} → Truthy
⚠️ Difficulties I Faced
I initially thought " " (space) is falsy, but it's actually truthy because it's not empty.
I also misunderstood numbers like 10, thinking they could be falsy — but only 0 is falsy.
🎯 Final Understanding
JavaScript checks existence, not meaning:
Empty / no value → Falsy
Any value present → Truthy
🚀 Key Takeaway
You don’t need to write:
if (value === true)
Instead, just write:
if (value)
Because JavaScript automatically converts values using Boolean().
📁 Practice Code
let values = ["", 0, null, undefined, false, " ", "hello", 10];

values.forEach(value => {
  if (value) {
    console.log(value + " → Truthy");
  } else {
    console.log(value + " → Falsy");
  }
});
