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
    const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return userChoice;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        if(humanChoice == computerChoice){
            console.log(`DRAW! You both picked ${humanChoice}!`)
        } else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log(`YOU LOSE! Paper beats rock!`)
            computerScore++
        } else if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log(`YOU WIN! Rock beats scissors!`)
            humanScore++
        } else if(humanChoice === "paper" && computerChoice === "rock"){
            console.log(`YOU WIN! Paper beats rock!`)
            humanScore++
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log(`YOU LOSE! Scissors beats paper!`)
            computerScore++
        } else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log(`YOU LOSE! Rock beats scissors!`)
            computerScore++
        } else if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log(`YOU WIN! Scissors beats paper!`)
            humanScore++
        } else {
            console.log(`Invalid choice. Please try again.`)
        }
    }

    playRound(humanChoice, computerChoice)
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    if(humanScore > computerScore){
        console.log(`You WIN! You beat the computer ${humanScore} - ${computerScore}!`);        
    } else if(computerScore > humanScore){
        console.log(`You LOSE! The computer beat you ${computerScore} - ${humanScore}!`);
    } else if(computerScore == humanScore){
        console.log(`It's a DRAW! You tied the computer ${computerScore} - ${humanScore}!`);
    }
} 
playGame();