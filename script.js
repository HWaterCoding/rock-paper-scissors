function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
console.log(getComputerChoice());
// console log the return value

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper, or Scissors?");

    if (userChoice = "Rock"){
        console.log("Rock");
    } else if (userChoice = "Paper"){
        console.log("Paper");
    } else if (userChoice = "Scissors"){
        return "Scissors";
    } else {
        return "Invalid Option";
    }
    // create a variable for the humans choice
    // assign a prompt to the variable to ask for input
    // based on the users input, return the corresponding string
}
//console log the returned value

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    // make humanChoice parameter case-insensitive
    // create conditional that evalutes if human won or lost
    // console log a winning/losing message based on result
    // if human wins, increment humanScore by 1.
    // if computer wins, increment computerScore by 1.
}

let humanChoice = 0
let computerChoice = 0