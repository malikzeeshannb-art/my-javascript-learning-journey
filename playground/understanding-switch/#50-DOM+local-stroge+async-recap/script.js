/*let nameInput = document.getElementById("nameInput");
let btn = document.getElementById("saveBtn");
let display = document.getElementById("display");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let userName = nameInput.value;
    localStorage.setItem("userName", userName);
   display.textContent = localStorage.getItem("userName");
});
let savedName = localStorage.getItem("userName");
if (savedName) {
    display.textContent ="Welcome Back " + savedName;
}

console.log("1");
setTimeout(() => {
    console.log("is appeared after 2 second!");
},2000);
    console.log("last!");
/*console.log("1");
setTimeout(() => {
    console.log("is appeared after 2 second!");
}, 2000);
console.log("last!");*/
// example of fetch api to understand how it works:

let userName = document.getElementById("name");
let saveBtn = document.getElementById("saveBtn");
let display = document.getElementById("display");
//logic:
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let usernameInput = userName.value;
    localStorage.setItem("name", usernameInput);
    display.textContent = "welcome: " + localStorage.getItem("name");
});
let savedName = localStorage.getItem("name");
if (savedName) {
    display.textContent = "welcome back dear: " + savedName;
    setTimeout( () => {
        display.textContent = savedName + " what was you up to previous days?"
    }, 3000);
    setTimeout( () => {
        display.textContent = savedName + " i think you were bussy somewhere, well, no problem, lets start now!";
    }, 7000);
}
