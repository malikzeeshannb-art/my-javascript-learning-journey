
/* let boxe = document.querySelector(".box");
boxe.classList.add("active");
boxe.classList.remove("box");
bixe.textContent = "i'm edited by javascript";

//let box = document.querySelector(".box");
box.classList.add("red");

function handleClick() {
let box = document.querySelector(".box");
 box.classList.toggle("active"); 
}*/
//   <h3 class="box">ma box hun!</h3>

    
// document.body.classList.toggle("dark");


// Select the element using querySelector
let box = document.querySelector(".box");


// Change text content of the element
box.textContent = "Content updated using JavaScript";


// Change inline styles using the style property
box.style.backgroundColor = "lightblue";
box.style.color = "black";
box.style.fontWeight = "bold";


// Add a new class to the element
box.classList.add("active");


// Remove a class from the element (if exists)
box.classList.remove("old-class");


// Toggle a class (adds if not present, removes if present)
box.classList.toggle("highlight");