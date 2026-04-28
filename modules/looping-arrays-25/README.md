
JavaScript Day 25 — Looping Arrays

Topic

Looping through array items one by one

What I learned

Today I learned how to go through an array item by item using a for loop. I also learned how to print every value inside an array without writing each item manually.

An array is useful because it keeps many values in one place. Instead of creating many separate variables, I can store everything in one list and access each item by its index.

What I practiced

I practiced with this array:

Then I used a loop to print all items one by one:

Finally, I printed the total number of items using:

Why arrays are useful

Arrays make code cleaner, shorter, and easier to manage. They help me keep many values in one single variable, which is much better than creating many separate variables.

They are also easier to read and update later. If I want to add, remove, or change an item, I only need to work with one array.

Problems I faced

While learning this topic, I faced a few small problems:

1. I almost forgot to declare the loop variable with let
At first, I wrote the loop using x = 0.

That is not the best way because the variable should be declared properly.

How I solved it
I changed it to:

This made the code correct and more professional.

2. I made a spelling mistake in one array item
I wrote bootal instead of bottle.

How I solved it
I carefully checked the array values again and corrected the spelling.

3. I needed to remember how .length works
At first, it was important to understand that studyResources.length gives the total number of items in the array.

How I solved it
I repeated the loop logic slowly and connected length with the last position of the array. That made it easier to understand why the loop stops at the right time.

Common problems everyone faces in this topic

This topic usually confuses beginners in the same few places:

forgetting that arrays start from index 0
using the wrong loop condition
forgetting .length
writing <= instead of <
accessing an index that does not exist
not understanding why fruits[1] gives the second item
These are normal mistakes. They happen because arrays and loops both need careful thinking.

How I solved the topic

I solved this topic by breaking it into simple parts:

First I understood that an array stores many values.
Then I learned that a loop can move through the array one item at a time.
After that, I used length so the loop knows when to stop.
Finally, I practiced with my own example and checked the output in the console.
That step-by-step method made the topic much easier.

Final understanding

My final understanding is:

Arrays store multiple values in one variable.
A for loop can print each value one by one.
length helps the loop know how many items exist.
Arrays are useful because they keep code clean, short, and organized.
My result

I successfully wrote a program that loops through an array and prints each item in the console. I also understood why arrays are important and how they make programming easier.

Conclusion

Today’s topic helped me understand how to work with list data in JavaScript. I now know how to store items in an array, loop through them, and print them properly. This topic is a strong base for future array lessons.