📘 Day 45 — DOM Manipulation: Changing Content

📌 Overview

This document summarizes my learning from Day 45 — Changing Content in JavaScript (DOM).
The focus was on understanding how to dynamically update content on a web page using:

* textContent
* innerText
* innerHTML

This session followed a strict study-mode where the AI acted as a senior developer/instructor, assigning tasks, validating responses, and correcting misunderstandings.

⸻

🎯 Learning Objectives

* Understand how to change text dynamically using JavaScript
* Learn the differences between textContent, innerText, and innerHTML
* Identify safe vs unsafe methods for handling content
* Apply all three methods in a combined practical task

⸻

🧠 Core Concepts

1. textContent

* Used to get or set all text inside an element
* Includes hidden text
* Ignores HTML tags (treats them as plain text)
* ✅ Safest option for plain text

let heading = document.querySelector("h1");
heading.textContent = "Hello Zeeshan!";

⸻

2. innerText

* Used to get or set only visible text
* Respects CSS (e.g., display: none)
* Ignores hidden elements

let para = document.querySelector("p");
para.innerText = "Visible text only";

⸻

3. innerHTML

* Used to get or set HTML + text
* Allows inserting HTML tags like <b>, <i>, etc.
* ⚠️ Can be unsafe if used with user input

let para = document.querySelector("p");
para.innerHTML = "<b>Hello Shani</b>";

⸻

⚠️ Security Concept — XSS (Cross-Site Scripting)

What I Learned:

XSS is a security issue that happens when untrusted input is injected into the page as HTML or script.

Key Insight:

* If user input is inserted using innerHTML, it may execute unwanted code
* This can break the application or expose security risks

Safe Practice:

* Use textContent for user input
* Use innerHTML only for controlled/static HTML

⸻

🔑 Golden Rule

User input → textContent (safe)
Own HTML → innerHTML (controlled use only)

⸻

🧪 Practical Tasks Completed

Task 1 — Change Heading using textContent

let heading = document.querySelector("h1");
heading.textContent = "Hello Zeeshan How's It Going?";

⸻

Task 2 — Change Paragraph using innerText

let para = document.querySelector("p");
para.innerText = "hello guys this is shani, i'm 25 year old!";

⸻

Task 3 — Change Content using innerHTML

let parag = document.querySelector("p");
parag.innerHTML = "<b>Hello Shani</b>";

⸻

❌ Mistakes & Corrections

Mistake 1:

Used textContent correctly but applied it to the wrong element (heading instead of paragraph)

✅ Correction:
Follow task instructions precisely

⸻

Mistake 2:

In innerHTML task, only made part of the text bold instead of full required text

❌ Wrong:

parag.innerHTML = "<b>shani</b>";

✅ Correct:

parag.innerHTML = "<b>Hello Shani</b>";

⸻

Mistake 3:

Confusion about innerText behavior

❌ Thought:
It might not show dynamically changed text

✅ Understanding:

* It does update dynamically
* It only ignores hidden content (via CSS)

⸻

🧠 My Understanding (Final)

* textContent → safest, handles plain text only
* innerText → shows only visible content
* innerHTML → allows HTML but must be used carefully

I now clearly understand when and why to use each method.

⸻

👨‍💻 Instructor Role (AI)

* Acted as a strict senior developer
* Broke topics into structured steps
* Gave tasks after each step
* Validated answers with minimal feedback
* Focused on clarity, not over-explanation
* Corrected mistakes immediately

⸻

🚀 Final Combined Task

// h1 using textContent
let heading = document.querySelector("h1");
heading.textContent = "Welcome Zeeshan";
// first paragraph using innerText
let para1 = document.querySelector(".para1");
para1.innerText = "This is visible text";
// second paragraph using innerHTML
let para2 = document.querySelector(".para2");
para2.innerHTML = "<b>This is bold text</b>";

⸻

✅ Final Checkpoint Answer

Q: Which method is safest for plain text and why?

A:
textContent is the safest because it treats everything as plain text and does not execute any HTML or scripts, preventing security issues like XSS.

⸻

📈 Conclusion

This session built a strong foundation in DOM content manipulation.
The key takeaway is not just how to change content, but how to do it safely and correctly in real-world applications.

⸻