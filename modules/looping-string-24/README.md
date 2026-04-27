JavaScript Day 24 — Looping Strings
Topic
Looping through a string and accessing characters one by one.
Goal of this Day
By the end of this topic, I learned how to read each character of a string separately using string indexing and a for loop.
What I Learned
A string is a group of characters written in order. Each character in a string has a position called an index.
In JavaScript, indexing starts from 0.
Example:
let name = "Zeeshan";
console.log(name[0]); // Z
console.log(name[1]); // e
console.log(name[2]); // e
This is called string indexing.
String indexing means accessing one character at a time from a string using its position.
Main Code
let name = "Zeeshan";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
How this works
let i = 0 starts the loop from the first character.
i < name.length makes sure the loop runs only until the last character.
console.log(name[i]) prints one character at a time.
i++ increases the value of i after each loop cycle.
My Understanding of the Loop
The loop works in this order:
i = 0
Condition check: i < name.length
Run the code inside the loop
Print the character at index i
Increase i by 1 using i++
Repeat until the condition becomes false
Example:
i = 0 → prints Z
i = 1 → prints e
i = 2 → prints e
and so on...
My Mistakes and Corrections
Mistake 1: Thinking name[i] returns a word
At first, I thought name[i] returns a word at a time.
Correction
name[i] returns one character at a time, not a full word.
Example:
let name = "Zeeshan";
console.log(name[0]); // Z
console.log(name[1]); // e
Mistake 2: Confusion about i++
I was not sure when i++ runs.
Correction
i++ runs after console.log(name[i]) executes in that loop cycle.
So the order is:
print character
then increase i
then check the condition again
Mistake 3: Understanding string indexing
I first explained string indexing in a messy way.
Correction
The clean meaning is:
String indexing is accessing characters from a string one by one using their position, starting from 0.
Difficulties I Faced
Understanding how loop flow works step by step.
Confusing character access with word access.
Not being fully sure when i++ happens.
Mixing up the meaning of indexing.
How I Solved Those Difficulties
I looked at the loop one step at a time.
I traced the output manually.
I checked the character at each index separately.
I understood that i++ happens after the current loop body finishes.
I corrected my definition of string indexing into a simple form.
Final Notes to Remember
A string is a sequence of characters.
Every character has an index.
Indexing starts from 0.
name[0] gives the first character.
A for loop can be used to print each character one by one.
name.length gives the total number of characters.
i++ runs after the loop body finishes.
Short Revision Answer
What is string indexing?
String indexing means reading or accessing each character of a string by its position, starting from 0.
Practice Task
Print each character of your name one by one using a for loop.
Example:
let name = "Zeeshan";
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
One-Line Memory Trick
Index starts at 0, loop prints one letter, and i++ moves to the next one.