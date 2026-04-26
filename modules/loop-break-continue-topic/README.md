JavaScript Day 23 — Loop Control
Topics Covered
break
continue
What I Learned Today
break
break stops a loop immediately.
When the loop reaches a condition that uses break, the loop ends at once and no more values are printed.
Example
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
Result
1
2
3
4
continue
continue skips the current loop step and moves to the next one.
It does not stop the loop completely. It only skips one value and keeps running.
Example
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
Result
1
3
5
7
9
Important Logic I Understood
% means remainder
The % operator gives the remainder after division.
Examples:
4 % 2 = 0
5 % 2 = 1
This helped me understand how to check even and odd numbers.
=== 0
When the remainder is 0, it means the number is divisible by 2 and is even.
!== 0
When the remainder is not 0, it means the number is odd.
Things That Were Difficult for Me
1. Understanding %
At first, I did not understand what % does. I thought it was some kind of percentage symbol, but it actually gives the remainder.
2. Understanding even and odd logic
I got confused with i % 2 === 0 and i % 2 !== 0. I was not fully clear about why one means even and the other means odd.
3. Understanding continue
I was confused because I thought continue might stop the loop. Later I understood that it only skips the current value and keeps the loop running.
How I Solved Those Problems
For %
I used simple division examples:
4 ÷ 2 leaves no remainder
5 ÷ 2 leaves a remainder
That made the % operator easier to understand.
For even and odd numbers
I learned this rule:
i % 2 === 0 → even number
i % 2 !== 0 → odd number
For break and continue
I separated both ideas clearly:
break → stop the loop
continue → skip only one step
Final Summary
Today I learned how to control loops in JavaScript.
break stops the loop completely.
continue skips only the current value.
% helps check even and odd numbers.
i % 2 === 0 means even.
i % 2 !== 0 means odd.
Small Practice Task
Stop at a limit
for (let i = 1; i <= 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}
Skip even numbers