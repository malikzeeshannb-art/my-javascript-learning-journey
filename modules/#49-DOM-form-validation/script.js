// ============================================
// Day 49 - Basic Form Validation
// ============================================

// Grab references to the form and the input fields
const form = document.getElementById("formData");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("userEmail");
const output = document.getElementById("output");

// STEP 1 + 2 + 3 + 4 combined: full validation on submit
form.addEventListener("submit", function (e) {
  // Prevents the page from refreshing on submit
  e.preventDefault();

  // .trim() removes leading/trailing spaces so a
  // whitespace-only entry is treated as empty
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Checks run in order. The first one that fails
  // sets the error message and stops the rest from running.
  if (name === "") {
    output.textContent = "Name is required";
  } else if (name.length < 3) {
    output.textContent = "Name must be at least 3 characters";
  } else if (email === "") {
    output.textContent = "Email is required";
  } else {
    // Clears any old error message once everything is valid
    output.textContent = "All good!";
  }
});

// ============================================
// BONUS: Real-time cleanup as the user types
// (removes leading spaces immediately, visibly)
// ============================================
nameInput.addEventListener("input", function () {
  nameInput.value = nameInput.value.trimStart();
});

// ============================================
// PRACTICE TASKS THAT I DONE IN MY PLAYGROUND FOLDER AND SOME OF THEM ARE IN MY PHONE IN TO ANOTHER CODE EDITOR APP. I WILL TRY TO ADD THEM HERE LATER.
// ============================================
// 1. Add a minimum length check for the email field
//    (for example, at least 5 characters).
//
// 2. Add a check that rejects an email which does not
//    contain the "@" symbol. Hint: use email.includes("@")
//
// 3. Add a password field to index.html with an "eye" button
//    that toggles the input's type between "password" and "text".
//
// 4. Modify the real-time input cleanup so it also removes
//    any digit characters as the user types into the Name field.