const options = document.querySelector(".options");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const userChoiceDisplay = document.querySelector("#user-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let userChoice = "";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;


options.addEventListener("click", generateUserChoice)

function generateUserChoice (e){
    userChoice = e.target.id;
    if (userChoice == ""){
        return;
    }
    else {
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getScore();
    }
    
}

function generateComputerChoice() {
    let randomNumber = Math.ceil(Math.random()*3);

    switch (randomNumber){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";
            break;
    }
    computerChoiceDisplay.textContent = computerChoice;
}

function getScore (){
    if (userChoice === computerChoice){
        console.log("I'ts a tie");
    } else if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock") ||
        (userChoice == "scissors" && computerChoice == "paper")
    ) {
        userScore ++;
    } else {
        computerScore ++;
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}