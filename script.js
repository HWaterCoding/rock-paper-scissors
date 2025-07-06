// need to add event listeners to buttons to properly reflect choices.
// need to create an "endgame" function that ends the game at 5 points
// endGame function needs to pop up and ask to play again
// 


let humanScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("#paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const roundOutcome = document.getElementById("outcome");
const playerDisplay = document.getElementById("");
const computerDisplay = document.getElementById("");
const currentScore = document.getElementById("currentScore")
const reset = document.getElementById("reset");


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

// function getHumanChoice(){
//     const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
//     return userChoice;
// }

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();


// function playGame(){

    function playRound(humanChoice, computerChoice){

        if(humanChoice == computerChoice){
            roundOutcome.textContent = `It's a tie! You both chose ${humanChoice}!`
        }

        if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        )
        {
            humanScore++
            roundOutcome.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
        }

        else if(
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors")
        )
        {
            computerScore++
            roundOutcome.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`
        }

        else {
            roundOutcome.textContent = `Invalid choice. Please try again.`
        }
    }

    //     if(humanChoice == computerChoice){
    //         console.log(`DRAW! You both picked ${humanChoice}!`)
    //     } else if(humanChoice === "rock" && computerChoice === "paper"){
    //         console.log(`YOU LOSE! Paper beats rock!`)
    //         computerScore++
    //     } else if(humanChoice === "rock" && computerChoice === "scissors"){
    //         console.log(`YOU WIN! Rock beats scissors!`)
    //         humanScore++
    //     } else if(humanChoice === "paper" && computerChoice === "rock"){
    //         console.log(`YOU WIN! Paper beats rock!`)
    //         humanScore++
    //     } else if(humanChoice === "paper" && computerChoice === "scissors"){
    //         console.log(`YOU LOSE! Scissors beats paper!`)
    //         computerScore++
    //     } else if(humanChoice === "scissors" && computerChoice === "rock"){
    //         console.log(`YOU LOSE! Rock beats scissors!`)
    //         computerScore++
    //     } else if(humanChoice === "scissors" && computerChoice === "paper"){
    //         console.log(`YOU WIN! Scissors beats paper!`)
    //         humanScore++
    //     } else {
    //         console.log(`Invalid choice. Please try again.`)
    //     }

    if(humanScore == 5 || computerScore == 5){
        //end the game
    }

    
    rockBtn.addEventListener("click", playRound);
    paperBtn.addEventListener("click", playRound("paper", computerChoice));


    scissorsBtn.addEventListener("click", () => playerChoice("scissors"));
    
    // function playerChoice(humanChoice){
    //     computerChoice = getComputerChoice();
    // }


function updateChoice(humanChoice, computerChoice){
    
    switch(humanChoice){
        case "rock":
            playerDisplay.innerHTML = "<img src='images/rock.png'>";
            break;
        case "paper":
            playerDisplay.innerHTML = "<img src='images/paper.png'>";
            break;
        case "scissors":
            playerDisplay.innerHTML = "<img src='images/scissors.png'>";
            break;
        }

    switch(computerChoice){
        case "rock":
            computerDisplay.innerHTML = "<img src='images/rock.png'>";
            break;
        case "paper":
            computerDisplay.innerHTML = "<img src='images/paper.png'>";
            break;
        case "scissors":
            computerDisplay.innerHTML = "<img src='images/scissors.png'>";
            break;
        }
}

    // playRound(humanChoice, computerChoice)
    // playRound(getHumanChoice(), getComputerChoice())
    // playRound(getHumanChoice(), getComputerChoice())
    // playRound(getHumanChoice(), getComputerChoice())
    // playRound(getHumanChoice(), getComputerChoice())



    if(humanScore > computerScore){
        console.log(`You WIN! You beat the computer ${humanScore} - ${computerScore}!`);        
    } else if(computerScore > humanScore){
        console.log(`You LOSE! The computer beat you ${computerScore} - ${humanScore}!`);
    } else if(computerScore == humanScore){
        console.log(`It's a DRAW! You tied the computer ${computerScore} - ${humanScore}!`);
    }


// }

// playGame();

















// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(){
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();

//         if(humanChoice == computerChoice){
//             console.log(`DRAW! You both picked ${humanChoice}!`)
//         } else if(humanChoice === "rock" && computerChoice === "paper"){
//             console.log(`YOU LOSE! Paper beats rock!`)
//             computerScore++
//         } else if(humanChoice === "rock" && computerChoice === "scissors"){
//             console.log(`YOU WIN! Rock beats scissors!`)
//             humanScore++
//         } else if(humanChoice === "paper" && computerChoice === "rock"){
//             console.log(`YOU WIN! Paper beats rock!`)
//             humanScore++
//         } else if(humanChoice === "paper" && computerChoice === "scissors"){
//             console.log(`YOU LOSE! Scissors beats paper!`)
//             computerScore++
//         } else if(humanChoice === "scissors" && computerChoice === "rock"){
//             console.log(`YOU LOSE! Rock beats scissors!`)
//             computerScore++
//         } else if(humanChoice === "scissors" && computerChoice === "paper"){
//             console.log(`YOU WIN! Scissors beats paper!`)
//             humanScore++
//         } else {
//             console.log(`Invalid choice. Please try again.`)
//         }
//     }

//     // playRound()
//     // playRound()
//     // playRound()
//     // playRound()
//     // playRound()

//     if(humanScore > computerScore){
//         console.log(`You WIN! You beat the computer ${humanScore} - ${computerScore}!`);        
//     } else if(computerScore > humanScore){
//         console.log(`You LOSE! The computer beat you ${computerScore} - ${humanScore}!`);
//     } else if(computerScore == humanScore){
//         console.log(`It's a DRAW! You tied the computer ${computerScore} - ${humanScore}!`);
//     }

//     // const rock = document.querySelector("#rock");
//     // const paper = document.querySelector("#paper");
//     // const scissors = document.querySelector("#scissors");

//     // rock.addEventListener("click", playRound);
//     // paper.addEventListener("click", playRound());
//     // scissors.addEventListener("click", playRound());

// } 
// playGame():