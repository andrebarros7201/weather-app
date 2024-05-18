import "./style.css";

//Get body and create the form div and display div
const body = document.querySelector("body");

const divForm = document.createElement("div");
divForm.classList.add("div-form");
body.appendChild(divForm);

const divDisplay = document.createElement("div");
divDisplay.classList.add("div-form");
body.appendChild(divDisplay);
