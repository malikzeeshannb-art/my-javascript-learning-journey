JavaScript Day 25 — Looping Arrays (Practice + Execution)
Overview
This module captures my hands-on practice of looping through arrays in JavaScript. The goal was simple but important: understand how to access and print each item from an array using a loop.
This is not just theory — this is a full execution cycle:
Task given
Code written by myself
Output verified in browser console
What you see in the screenshot
This screenshot represents a complete learning workflow:
1. Task (Left side)
I was given a task to:
Store multiple items in an array
Use a for loop
Print each item one by one
Use .length correctly
Add a comment explaining arrays
Print total number of items
This task was designed to test real understanding, not just memorization.
2. My Code (Right side — VS Code)
I wrote the code myself in VS Code:
let studyResources = ["pen", "book", "phone", "bottle", "watch"];

// Arrays keep many values in one clean place.
for (let x = 0; x < studyResources.length; x++) {
    console.log(studyResources[x]);
}

console.log("Total items: " + studyResources.length);
Key things I applied:
Used an array to store multiple values
Used for loop to iterate
Used .length to control loop
Accessed items using index [x]
3. Output (Bottom — Browser Console)
I ran the code in the browser and verified output in Chrome console:
pen
book
phone
bottle
watch
Total items: 5
This confirms that:
Loop is working correctly
First and last items are printed
Total count is accurate
What I learned
Arrays store multiple values in one variable
Index starts from 0
Loop helps access items one by one
.length tells total items and controls loop
Clean logic = better code
Problems I faced
1. Variable declaration mistake
I initially wrote:
for (x = 0; x < studyResources.length; x++)
Fix:
Added let:
for (let x = 0; x < studyResources.length; x++)
2. Spelling mistake in array
I wrote bootal instead of bottle
Fix:
Reviewed and corrected manually
3. Understanding .length
At first, I needed clarity on how loop knows when to stop
Fix:
Connected .length with total items and loop condition
Common beginner mistakes (important)
Forgetting index starts at 0
Missing let in loop variable
Using wrong condition (<= instead of <)
Forgetting .length
Accessing wrong index
How I approached this task
I followed a simple system:
Understand the task clearly
Write code myself (no copy)
Run and check output
Fix mistakes
Confirm final result
Final takeaway
This was a basic topic, but highly important.
This is how real learning happens:
Write code yourself
Make mistakes
Fix them
Verify output
Step by step, this builds strong fundamentals.
Status
✔ Task completed ✔ Output verified ✔ Concepts understood
Moving forward to next topic.