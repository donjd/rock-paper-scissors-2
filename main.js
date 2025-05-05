const options = document.querySelector(".options");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let userChoice = "";
let computerChoice = "";

options.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
})