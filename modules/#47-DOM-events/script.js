let form = document.querySelector("#form");
let userinp = document.querySelector("#inp");
let btn = document.querySelector(".btn");
let para = document.querySelector(".parg");

// Click event
btn.addEventListener("click", function () {
para.textContent = "Button Clicked";
});

// Input event
userinp.addEventListener("input", function () {
para.textContent = "Typing: " + userinp.value;
});

// Submit event
form.addEventListener("submit", function (e) {
e.preventDefault();
para.textContent = "Submitted: " + userinp.value;
userinp.value = "";
});