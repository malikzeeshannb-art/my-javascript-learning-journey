/* let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    console.log("Clicked!");
});
let form = document.querySelector("#formS");
form.addEventListener("submit", function() {
    console.log("submitted!");
});*/
/* let me = document.querySelector("#btn2");
me.addEventListener("click", function () {
    let text = document.querySelector("p");
    text.textContent = "Clicked!";
}); */

/* let inp = document.querySelector("#text");
let btn = document.querySelector("#btn");
let para = document.querySelector(".wait");

inp.addEventListener("input", function () {
    para.textContent = inp.value;
});
btn.addEventListener("click", function () {
    if (inp.value === "") {
        para.textContent = "Please inter something!";
    }
    else {
        para.textContent = "Submited: " + inp.value; inp.value = "";
    }
}); 

// challenge number 2:
 
let text = document.querySelector("#msg");
let btn = document.querySelector("#btn2");
let list = document.querySelector(".unorder");

btn.addEventListener("click", function () {
    if (text.value !== "") {
        list.appendChild = text.value;
    }
})
text.addEventListener("input", function () {
   // if ()
});  
   
   let form = document.querySelector("#userF");
      let inp = document.querySelector("#inp");
   let btn = document.querySelector("#btn");
   let para = document.querySelector(".type");

   inp.addEventListener("input", function () {
    para.textContent = "typing: " + inp.value;
   });
   form.addEventListener("click", function () {
    para.textContent = "You left the typing!";
   });
   btn.addEventListener("submit", function () {
    para.textContent = "Final: " + inp.value;
   });

   let userinp = document.querySelector("#inp");
   let btn = document.querySelector(".btn");
   let list = document.querySelector("#uList");
   let para = document.querySelector(".parg");
   // behaviour: 
   //userinp.addEventListener("input", function () {
   // para.textContent = "Typing: ", + userinp.value; 
   //});
   btn.addEventListener("click", function () {
   para.textContent = "Item added!", + userinp.value; userinp.value=""; 
   });*/ 
   let form = document.querySelector("#form");
   let userinp = document.querySelector("#inp");
   let btn = document.querySelector(".btn");
   let para = document.querySelector(".parg");

 btn.addEventListener("click", function () {
    para.textContent = "Button Clicked";
   });
   userinp.addEventListener("input", function () {
    para.textContent = "Typing: " + userinp.value; 
   });
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
    para.textContent = "Submitted: " + userinp.value; userinp.value="";
   });
  