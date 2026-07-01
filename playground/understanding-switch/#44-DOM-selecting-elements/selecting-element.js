/*// task 1: getElementById(...) selector uses.
let select = document.getElementById("para");
console.log(select);
// task 2: use querySelector.
let result = document.querySelector(".heading");
console.log(result);
//task 3: querySelectorAll(...).
let fruit = document.querySelectorAll(".fruit");
console.log(fruit); // this is returning all semilar elements.
console.log(fruit[0]); */

// final combined task:
/*let getelement = document.getElementById("main");
 console.log(getelement);

let qSelect = document.querySelector("button");
 console.log(qSelect);

let qSelAll = document.querySelectorAll(".text");
console.log(qSelAll); // this returns node-List.
console.log(qSelAll[1]); // this returns index 1's content.*/

// combined task for day 43 and 44 in DOM manipulation phase 5.
// part 1 tasks:
console.log(document);
console.log(document.body);
let res = document.body.querySelector(".container");
console.log(res);
//part 2 tasks:
let select = document.getElementById("title");
let select2 = document.querySelector(".container");
let select3 = document.querySelectorAll(".text");
let select4 = document.querySelector("ul");
//console.log(select4);
let select5 = document.querySelectorAll(".item");
let select6 = document.querySelector("button");

// part 3 printing: 
console.log(select5[0]);
console.log(select5[2]);
console.log(select3[1]);




