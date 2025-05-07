const options = document.querySelector(".options");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const userChoiceDisplay = document.querySelector("#user-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");

let userChoice = "";
let computerChoice = "";

options.addEventListener("click", generateUserChoice)

function generateUserChoice (e){
    userChoice = e.target.id;
    if (userChoice == ""){
        return;
    }
    else {
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    }
}

function generateComputerChoice() {
    let randomNumber = Math.ceil(Math.random()*3);

    switch (randomNumber){
        case 1:
            computerChoiceDisplay.textContent = "rock";
            break;
        case 2:
            computerChoiceDisplay.textContent = "paper";
            break;
        default:
            computerChoiceDisplay.textContent = "scissors";
            break;
    }

}