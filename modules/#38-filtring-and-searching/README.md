# Day 38 — JavaScript (Filtering and Searching)

## 📌 Topics Covered
- filter()
- find()
- Combining conditions using &&

---

## 🧠 My Understanding

### filter()
- Used to get **all items** that match a condition
- Returns a **new array**
- Loops through all elements

### find()
- Used to get **only the first item** that matches a condition
- Returns a **single value (object)**
- Stops when first match is found

### &&
- Used to combine multiple conditions
- Both conditions must be **true**

---

## ❌ Mistakes I Made

### 1. Comparing object directly
```js
product > 50
🔴 Wrong because product is an object
✅ Fix:
product.price > 50
2. Using wrong method name
fined()
🔴 Typo
✅ Fix:
find()
3. Using string instead of array
let newProd = "matchProduct";
🔴 Wrong data type
✅ Fix:
let newProd = products;
4. Misunderstanding find()
I thought it returns the "best" match
But it actually returns the first match in order
5. Using multiple filters
filter().filter()
🔴 Works but inefficient
✅ Better:
filter(item => condition1 && condition2)
🚀 Key Takeaways
Always access object properties (product.price)
filter() = multiple results
find() = first result only
Order in array matters for find()
Use && to combine conditions efficiently