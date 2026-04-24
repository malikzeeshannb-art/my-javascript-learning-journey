# JavaScript Day 21 — While Loop

## Topics
- Loop idea
- Counter

## What I learned
A `while` loop keeps repeating code **as long as the condition is true**.

A counter is a variable that changes after each loop run.

## Example
```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
How it works
i starts at 1
The loop runs while i <= 5
console.log(i) prints the current value
i++ increases the value by 1
When i becomes 6, the condition becomes false and the loop stops
Output
1
2
3
4
5
Checkpoint
A loop stops when the condition becomes false.
Practice Task
Count from 1 to 5 using a while loop.