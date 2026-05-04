# JavaScript Day 28 — Functions

## Topic

**Function** — a reusable block of code.

## What I learned today

Today I learned that a function is a piece of code that you write once and call many times whenever needed. It helps keep code reusable, readable, and easy to update.

## Why functions are useful

Functions solve the problem of repeating the same code again and again. Instead of writing the same logic many times, we define it once and reuse it by calling the function name.

## Main ideas from today

* A function is a reusable block of code.
* A function is **defined** once.
* A function is **called** many times.
* `greet` is the function name.
* `greet()` runs the function.
* A function can contain any JavaScript code, not only `console.log()`.
* Functions can include:

  * conditions (`if` / `else`)
  * calculations
  * messages
  * logic for checking values

## My understanding

I understood that:

* functions help avoid repeating code
* functions make code cleaner
* functions are useful when we want the same task to run in multiple places
* calling a function means using its name with parentheses

## Mistakes I made and how they were corrected

### 1. Function naming confusion

At first, I treated the function name like a variable. The correction was:

* `greet` = function name
* `greet()` = calling/running the function

### 2. Rewriting the function

I thought I might need to write the full function again wherever I needed it. The correction was:

* define the function only once
* call it again and again when needed

### 3. Thinking functions only work with `console.log()`

I asked whether a function can contain only `console.log()`. The correction was:

* a function can contain any valid JavaScript code
* `if`, variables, calculations, and other logic can also go inside it

### 4. Calling syntax

I wrote calls like this:

```javascript
ageCount ()
userInfo ()
bussStatus ()
```

The cleaner and correct form is:

```javascript
ageCount();
userInfo();
bussStatus();
```

### 5. Spelling fixes

A few spelling mistakes were noticed in the practice code and messages:

* `allowd` → `allowed`
* `pritty` → `pretty`
* `buss` → `bus`
* `bussStatus` → `busStatus` (cleaner naming)
* `ignorer` → `in order to` / `instead of` depending on context

## My practice code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparison Example</title>
</head>
<body>
    <h1>Running three functions in many places and then calling them anywhere — task provided by ChatGPT</h1>

    <script>
        function ageCount() {
            let age = 15 + 3;
            if (age >= 18) {
                console.log("You're an adult and you are fully allowed to use all our services.");
            } else {
                console.log("Minor user!");
            }
        }

        function userInfo() {
            let userName = "zeeshan";
            if (userName === "zeeshan") {
                console.log("Welcome back, sir!");
            } else {
                console.log("Try again!");
            }
        }

        function busStatus() {
            let busTime = "fiveMorning";
            if (busTime === "sixInMorning") {
                console.log("Bus is still at the station, do it fast!");
            } else {
                console.log("You're pretty late!");
            }
        }

        // Function calls
        ageCount();
        userInfo();
        busStatus();
    </script>
</body>
</html>
```

## Output / behavior of the code

* `ageCount()` checks whether the age is 18 or above.
* `userInfo()` checks whether the username matches `zeeshan`.
* `busStatus()` checks the bus time and prints a status message.

## Final learning outcome

By the end of Day 28, I learned how to:

* define a function
* call a function
* reuse code
* write cleaner JavaScript
* place different logic inside functions
* correct my own code after review

## Final checkpoint answer

**Why use functions?**

Because functions save time, remove repetition, make code reusable, keep code clean, and make future updates easier.

## Final roadmap for Day 28

1. Understand what a function is.
2. Learn why functions are useful.
3. Practice writing simple functions.
4. Call the functions multiple times.
5. Review mistakes.
6. Lock in the idea that a function is defined once and reused many times.

## One-line summary

A function is a reusable block of code that helps you write cleaner JavaScript and avoid repeating the same logic.
