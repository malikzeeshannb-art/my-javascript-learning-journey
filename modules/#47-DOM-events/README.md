📘 Day 47 — Events (Study Log)

📌 Topics Covered

* addEventListener
* click event
* input event
* submit event
* Updating text using events

⸻

🧠 My Initial Understanding

At the start, I understood that:

* Events are actions like clicking, typing, or submitting ✔️
* addEventListener is used to attach events ✔️

But I had confusion in:

* Thinking everything is basically a “click” ❌
* Not clearly separating different event types ❌
* Treating events like commands instead of actions ❌

⸻

❌ Mistakes I Made

1. Wrong Concept of Event

* I thought event = command
* Correct: Event = action (user/browser triggers it)

⸻

2. Event Target Mistakes

* I attached submit event on button ❌
* Correct: submit always goes on form

⸻

3. Property Confusion

* Used textContent for input value ❌
* Correct: Input uses .value

⸻

4. Event Misunderstanding

* Thought all actions are “click” ❌
* Learned:
    * click → press
    * input → typing
    * submit → form send

⸻

5. Logic Mistakes

* Didn’t handle empty input cases
* Didn’t stop default form behavior (page reload)

⸻

✅ What I Learned

✔️ Event Flow

User action → Event → addEventListener → Function runs

⸻

✔️ addEventListener

* Listens for a specific event
* Runs a function when event happens

element.addEventListener("event", function() {
  // action
});

⸻

✔️ Key Events

click

* Triggered when element is pressed

input

* Triggered when user types in input field

submit

* Triggered when form is submitted
* Needs preventDefault() to stop reload

⸻

✔️ DOM Update (Within Scope)

* Use textContent to change text
* Use .value to get input data

⸻

🔄 How My Understanding Improved

* I moved from guessing → to understanding event types
* I learned that:
    * Event type matters
    * Event target matters
    * Correct property matters

⸻

⚠️ Weak Areas (To Improve)

* Choosing correct element for event
* Remembering which event belongs where
* Writing clean logic without confusion

⸻

🏁 Final Status

✔️ I can:

* Use addEventListener
* Handle click, input, submit events
* Update UI based on user actions

⸻

🚀 Next Focus

* Stronger event control
* Better DOM manipulation
* Cleaner logic building

⸻

🧾 Final Note

Events are not the action itself —
they are the signal that something happened.

My job is:
👉 Listen correctly
👉 React correctly
👉 Update UI correctly