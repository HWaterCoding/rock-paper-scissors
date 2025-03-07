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
    let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return userChoice;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(computerChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log(`Tie game! You both picked ${humanChoice}!`)
    } else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log(`You lose! Paper beats rock!`)
        computerScore++
    } else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log(`You win! Rock beats scissors!`)
        humanScore++
    } else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log(`You win! Paper beats rock!`)
        humanScore++
    } else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log(`You lose! Scissors beats paper!`)
        computerScore++
    } else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log(`You lose! Rock beats scissors!`)
        computerScore++
    } else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log(`You win! Scissors beats paper!`)
        humanScore++
    } else {
        console.log(`Invalid choice. Please try again.`)
    }

    // if human wins, increment humanScore by 1.
    // if computer wins, increment computerScore by 1.
}

console.log(playRound(humanChoice, computerChoice));

