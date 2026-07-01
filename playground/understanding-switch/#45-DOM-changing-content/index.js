// testing how to change the text dinamically with textContent.

let heading = document.querySelector("h1");
heading.textContent = "Hello Zeeshan How's It Going?";
 
// task number two change the paragraph using inner text:

// let para = document.querySelector("p");
// para.innerText = "hello guies this is shani, i'm 25 year old!";

// task number 3 change the text using innerHTML:

let parag = document.querySelector("p");
parag.innerHTML = "<b>hello shani</b>";

let box = document.querySelector(".box");
box.classList.add("active");