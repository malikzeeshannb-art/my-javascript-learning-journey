# JavaScript Day 15 — if...else

Today I practiced **two-path decision making** in JavaScript using `if...else`.

## What I learned

`if...else` is used when a condition has **two possible outcomes**:

- `if` runs when the condition is `true`
- `else` runs when the condition is `false`

## Topic: two-path decisions

This structure helps JavaScript choose between two actions based on a condition.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 15 - if...else</title>
</head>
<body>
    <script>
        let marks = 45;

        if (marks >= 50) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    </script>
</body>
</html>
How it works
If marks are 50 or above, the output is Pass
If marks are below 50, the output is Fail
Task completed
I wrote simple pass/fail logic using if...else.
Checkpoint
We use else when the if condition is not true.
Key takeaway
else is the fallback path when the main condition fails.