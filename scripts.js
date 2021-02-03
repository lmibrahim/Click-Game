"use strict";

let grid = document.querySelector(".grid");
let cells = document.querySelectorAll(".cell");
let randomNumber = Math.floor(Math.random() * 16);
let body = document.querySelector("body");
cells[randomNumber].setAttribute("id", "it");

// if it is clicked it turns red and the text it is on the cell and background turns black

// making it not anonymous to be able to remove
// once IT is clicked, remove event listener so you cant turn other cells green
const click = (e) => {
  if (e.target.id === "it") {
    e.target.style.backgroundColor = "red";
    e.target.textContent = "it";
    document.body.style.backgroundColor = "black";
    grid.removeEventListener("click", click);
  } else if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "green";
  }
};

grid.addEventListener("click", click);

// (e) => {
//     if (e.target.id === "it") {
//       e.target.style.backgroundColor = "red";
//       e.target.textContent = "it";
//       document.body.style.backgroundColor = "black";
//     } else if (e.target.classList.contains("cell")) {
//       e.target.style.backgroundColor = "green";
//     }
//   });
