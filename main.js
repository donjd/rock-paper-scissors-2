const options = document.querySelector(".options");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const userChoiceDisplay = document.querySelector("#user-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");

let userChoice = "";
let computerChoice = "";
let randomNumber = 0;

options.addEventListener("click", generateUserChoice)

function generateUserChoice (e){
    userChoice = e.target.id;
    if (userChoice == ""){
    }
    else {
    userChoiceDisplay.textContent = userChoice;
    }
    
}

//user choice is blank
//computer choice is blank
//random number is 0
//user clicks on option
//user choice is set to the id of the option
//random number between 1 and 3 is generated
//if number is 1, rock, if 2, paper, is 3, scissors
//computer choice is set to corresponding weapon
//change text content of #user-choice to userChoice
//change text content of #computer-choice to computerChoice
