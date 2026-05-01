# JavaScript Day 27 — Number Guessing Game (Review Day)

## 🎯 Task Overview

Build a simple number guessing logic using loops where:

* A secret number is predefined
* User has limited attempts
* System gives feedback (correct / try again)
* Game ends after success or max attempts

---

## 🧠 Core Concepts Used

This exercise is a **review of previous loop concepts**:

* While Loop (Day 21)
* Counters (Day 21)
* For Loop understanding (Day 22)
* Break & Continue (Day 23)
* String / condition checking
* Loop control logic

---

## ⚙️ Final Working Code

```js
let secretNumber = 6;
let guesses = 0;
let guess = 0;
let limit = 3;

while (guesses < limit) {
    guess++;
    guesses++;

    if (guess === secretNumber) {
        console.log("correct number");
        break;
    } else {
        console.log("try again!");
    }
}

if (guess !== secretNumber) {
    console.log("game over");
}
```

---

## ❌ Common Mistakes Made

### 1. Mixing variables roles

* Using `guesses` as both counter and condition checker
* Confusing `guess` vs `guesses`

### 2. Unnecessary nested loop

* Extra `while` loop added without need
* Caused logic confusion and repeated execution

### 3. Wrong loop condition thinking

* Using incorrect variable for stopping condition

---

## 🔧 Fixes Applied

* Separated roles clearly:

  * `secretNumber` → fixed answer
  * `guess` → current attempt
  * `guesses` → attempt counter
* Removed nested loop
* Added `break` for early exit
* Controlled attempts using `limit`

---

## 🧩 Key Learnings

* One loop = one responsibility
* Counters track attempts, not values
* `break` is used for early termination
* Clean variable separation is critical in logic building

---

## 🚀 Developer Insight

This task simulates real-world logic design:

* Input handling (guess simulation)
* Control flow management
* Exit conditions (success/failure)

In production systems, this pattern is used in:

* Login attempts
* CAPTCHA retries
* API retry limits

---

## 📌 Final Checkpoint

You should now be able to:

* Build loop-based logic safely
* Avoid infinite loops
* Separate counters vs data variables
* Control execution flow using conditions

---

## 🏁 Status

Day 27 Review: COMPLETED
