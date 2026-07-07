let form = document.getElementById("formData");
let inpN = document.getElementById("name");
let inpE = document.getElementById("userEmail");
let para = document.getElementById("output");

form.addEventListener("submit", function (e) {
e.preventDefault();
const userData = {
    name: inpN.value,
     email: inpE.value
};
para.textContent = userData.name, userData.email;
});
