const form = document.getElementById("formData");
const nameInput = document.getElementById("name");
const error = document.getElementById("display");

form.addEventListener("submit", (e) => {
    e.preventDefault();
let name = nameInput.value;
if (name === "") {
  error.textContent = "Name is required";
} else if (name.length < 3) {
  error.textContent = "Name must be at least 3 characters";
} else {
  error.textContent = "";
}
});