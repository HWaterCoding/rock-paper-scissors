//initialize variables to be used later
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

//variables to be linked to HTML elements
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const currentScore = document.getElementById("currentScore");
const roundOutcome = document.getElementById("roundOutcome");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const gameOutcome = document.getElementById("gameOutcome");
const resetBtn = document.getElementById("resetBtn");
const overlay = document.getElementById("overlay");

//function to get randomized computer choice
function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

//function for RPS game logic.
function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice){
        roundOutcome.textContent = `It's a tie! You both chose ${humanChoice}!`
    }

    if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    )
    {
        humanScore++
        roundOutcome.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
    }

    else if(
        (humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Scissors")
    )
    {
        computerScore++
        roundOutcome.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`
    }
}  

//event listeners on buttons to execute functions
rockBtn.addEventListener("click", () => runChoice("Rock"));
paperBtn.addEventListener("click", () => runChoice("Paper"));
scissorsBtn.addEventListener("click", () => runChoice("Scissors"));

//function to handle the user input and run the game taking the button clicked as a parameter
function runChoice(humanChoice){
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScore();
    updateChoice(humanChoice, computerChoice);
    isGameOver();
}

//function to display the current choice of both player and computer
function updateChoice(humanChoice, computerChoice){
    switch(humanChoice){
        case "Rock":
            playerDisplay.innerHTML = "<img src='images/rock.png'>";
            break;
        case "Paper":
            playerDisplay.innerHTML = "<img src='images/paper.png'>";
            break;
        case "Scissors":
            playerDisplay.innerHTML = "<img src='images/scissors.png'>";
            break;
        }

    switch(computerChoice){
        case "Rock":
            computerDisplay.innerHTML = "<img src='images/rock.png'>";
            break;
        case "Paper":
            computerDisplay.innerHTML = "<img src='images/paper.png'>";
            break;
        case "Scissors":
            computerDisplay.innerHTML = "<img src='images/scissors.png'>";
            break;
        }
}

//function to update the score as rounds are played
function updateScore(){
    currentScore.textContent = `${humanScore} : ${computerScore}`;
}

//function to end the game when player or computer hits 5 and display play again overlay
function isGameOver(){
    if(humanScore === 5 || computerScore === 5){
        overlay.style.display = "block";
        if(humanScore > computerScore){
            gameOutcome.textContent = `You WIN! You beat the computer ${humanScore} - ${computerScore}!`
        }
        else if(computerScore > humanScore){
            gameOutcome.textContent = `You LOSE! The computer beat you ${computerScore} - ${humanScore}!`
        }
    }
}

//event listener on reset button to execute the function on click
resetBtn.addEventListener("click", resetGame);

//function to restart the game once it is over
function resetGame(){
    overlay.style.display = "none";
    humanScore = 0;
    computerScore = 0;
    currentScore.textContent = `${humanScore} - ${computerScore}`;
    roundOutcome.textContent = "First to 5 points wins!";
    playerDisplay.textContent = "";
    computerDisplay.textContent = "";
}