// ==============================
// Day 45 — Changing Content
// ==============================

// 1. textContent
// - Gets/sets all text (visible + hidden)
// - Ignores HTML tags
// - Safest for plain text

const heading = document.querySelector("h1");
heading.textContent = "Hello Zeeshan"; // plain text only


// 2. innerText
// - Gets/sets only visible text
// - Respects CSS (display: none ignored)

const para1 = document.querySelector(".para1");
para1.innerText = "This text is visible to the user";


// 3. innerHTML
// - Gets/sets HTML + text
// - Can render HTML tags
// - Use carefully

const para2 = document.querySelector(".para2");
para2.innerHTML = "<b>This text is bold</b>";


// ==============================
// Security Concept — XSS
// ==============================

// ❌ Unsafe (user input directly in innerHTML)
const userInput = "<script>alert('hack')</script>";
para2.innerHTML = userInput; // risky

// ✅ Safe (treats input as plain text)
para2.textContent = userInput;


// ==============================
// Golden Rule
// ==============================

// textContent → safest for plain text
// innerText   → visible text only
// innerHTML   → HTML content (controlled use only)


let box = document.querySelector(".box");
box.classList.add("active");