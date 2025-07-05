let humanScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("#paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

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

function getHumanChoice(){
    
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame(){

    function playRound(humanChoice, computerChoice){

        if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        )   {humanScore++}

        else if(
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors")
        )   {computerScore++}
        else {
            console.log(`Invalid choice. Please try again.`)
        }

        if(humanScore == 5 || computerScore == 5){
            //end the game
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
    // }


    // rockBtn.addEventListener("click", playRound);
    // paperBtn.addEventListener("click", playRound("paper", computerChoice));


    // scissorsBtn.addEventListener("click", () => playerChoice("scissors"));
    // function playerChoice(humanChoice){
    //     computerChoice = getComputerChoice();
    // }




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

}

playGame();














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
// playGame();