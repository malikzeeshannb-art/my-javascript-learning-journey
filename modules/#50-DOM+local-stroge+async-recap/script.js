let userName = document.getElementById("name");
let saveBtn = document.getElementById("saveBtn");
let display = document.getElementById("display");

// Save name on button click
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let usernameInput = userName.value;
    localStorage.setItem("name", usernameInput);
    display.textContent = "welcome: " + localStorage.getItem("name");
});

// Check for saved name on page load
let savedName = localStorage.getItem("name");
if (savedName) {
    display.textContent = "welcome back dear: " + savedName;

    setTimeout(() => {
        display.textContent = savedName + " what was you up to previous days?";
    }, 3000);
}