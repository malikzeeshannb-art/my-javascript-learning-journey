/* =====================================================================
   DAY 48 — FORMS PRACTICE
   Topics: form value, input value, submit event, preventDefault
   This file contains 3 practice tasks to demonstrate understanding
   of form handling in JavaScript.
   ===================================================================== */


/* =====================================================================
   TASK 1: Basic Form - Capture Name & Email, Display on Screen
   ===================================================================== */

// Selecting the form and its input elements from the DOM.
// We store references in variables so we don't have to query the
// DOM again and again inside the event listener.
let form = document.getElementById("formData");
let inpN = document.getElementById("name");
let inpE = document.getElementById("userEmail");
let para = document.getElementById("output");

// Listening for the "submit" event on the form.
// The "e" parameter represents the Event object, which gives us
// control over the event (like stopping its default behavior).
form.addEventListener("submit", function (e) {

  // By default, submitting a form reloads the page.
  // preventDefault() stops that reload so our JS code can run
  // and the captured data doesn't disappear before we see it.
  e.preventDefault();

  // Collecting both input values into a single object.
  // Using an object keeps related data organized in one place,
  // instead of having separate loose variables.
  const userData = {
    name: inpN.value,   // .value gets whatever the user typed
    email: inpE.value
  };

  // Displaying the collected data inside the <p id="output"> element.
  // Template literals (backticks) let us insert variable values
  // directly inside a string using ${...}.
  para.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
});


/* =====================================================================
   TASK 2: Extended Form - Capture Name, Age, City (3 fields)
   Purpose: Practice handling more than 2 fields in one object.
   ===================================================================== */

let userForm = document.getElementById("userForm");
let uName = document.getElementById("uName");
let uAge = document.getElementById("uAge");
let uCity = document.getElementById("uCity");
let userOutput = document.getElementById("userOutput");

userForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // Collecting 3 fields into one object.
  // Note: .value always returns a STRING, even for type="number" inputs.
  // If we needed to do math with age, we'd convert it using Number(uAge.value).
  const userInfo = {
    name: uName.value,
    age: uAge.value,
    city: uCity.value
  };

  // Displaying all 3 pieces of data together using a template literal.
  userOutput.textContent =
    `Name: ${userInfo.name} | Age: ${userInfo.age} | City: ${userInfo.city}`;
});


/* =====================================================================
   TASK 3: Form that Resets After Submit
   Purpose: Practice using form.reset() so the form clears itself
   automatically after the data has been captured and displayed.
   ===================================================================== */

let resetForm = document.getElementById("resetForm");
let feedbackInput = document.getElementById("feedback");
let resetOutput = document.getElementById("resetOutput");

resetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Capturing the value BEFORE resetting the form.
  // This order matters: if we reset first, the .value would
  // already be empty by the time we try to read it.
  const feedbackData = feedbackInput.value;

  resetOutput.textContent = `Thanks for your feedback: "${feedbackData}"`;

  // form.reset() clears all input fields back to their default state.
  // Useful for cases like feedback forms, where each submission
  // should start fresh for the next entry.
  resetForm.reset();
});