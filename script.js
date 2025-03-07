function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function getHumanChoice(){
    let userChoice = prompt("Rock, Paper, or Scissors?");
    return userChoice;
}


// let humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// console.log(computerChoice);

// switch (humanChoice){
//     case "rock":
//         console.log("rock");
//         break;
//     case "paper":
//         console.log("paper");
//         break;
//     case "scissors":
//         console.log("scissors");
//         break;
//     default:
//         console.log( "You entered an Invalid Option.");
// }


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    // make humanChoice parameter case-insensitive
    // create conditional that evalutes if human won or lost
    // console log a winning/losing message based on result
    // if human wins, increment humanScore by 1.
    // if computer wins, increment computerScore by 1.
}

// let humanChoice = 0
// let computerChoice = 0