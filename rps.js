let playerScore = 0;
let computerScore = 0;
let playerWinCount = 0;
let computerWinCount = 0;
let outcome = ''
let rpsArray = ["rock", "paper", "scissors"];

let playerSelectionRock = "rock";
let playerSelectionPaper = "paper";
let playerSelectionScissors = "scissors";


const result = document.getElementById("result");
result.addEventListener("click", function() {
    result.textContent = outcome;
});

const player_score = document.getElementById("player-score");
const computer_score = document.getElementById("computer-score");
const player_wins = document.getElementById("player-wins");
const computer_wins = document.getElementById("computer-wins");

function getComputerChoice() {
    computerChoice = ["rock", "paper", "scissors"];
    return computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

//computerChoice = getComputerChoice();

computer_score.textContent = "computer round wins: " + computerScore + "/5";
player_score.textContent = "player round wins: " + playerScore + "/5";
computer_wins.textContent = "computer games won: " + computerWinCount;
player_wins.textContent = "player games won: " + playerWinCount;

//let playerInput = document.getElementById("player-input");

function getInputVal() {
    let playerInput = document.getElementById("player-input");
    playerInput = document.getElementById("player-input").value;
    playerInput = playerInput.toLowerCase();
    
    let playerSelection = playerInput;

    playRound(playerSelection);
    
    //return playerSelection;
}

function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    console.log(playerSelection);
    if (playerSelection === computerChoice) {
        outcome = "tie";
        result.textContent = "Computer chose " + computerChoice + ". " + outcome + ".";
        return outcome;
    } else if (playerSelection === "rock" && computerChoice === "paper" ||
    playerSelection === "paper" && computerChoice === "scissors" ||
    playerSelection === "scissors" && computerChoice === "rock") {
        outcome = "lose";
        computerScore++;
        result.textContent = "Computer chose " + computerChoice + ". You " + outcome + "!";
        computer_score.textContent = "computer round wins: " + computerScore + "/5";
        if (computerScore === 5) {
            computerWinCount++;
            result.textContent = "You lose! Click one of the three buttons to play again.";
            computer_wins.textContent = "computer games won: " + computerWinCount;
            restartGame();
        }
        console.log("player score:", playerScore, " computer score:", computerScore, " player wins:", playerWinCount, " computer wins: ", computerWinCount);
        return computerScore;
    }   else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        result.textContent = "Invalid entry";
    } 
    
    else {
        outcome = "win";
        playerScore++;
        result.textContent = "Computer chose " + computerChoice + ". You " + outcome + "!";
        player_score.textContent = "player round wins: " + playerScore + "/5";
        if (playerScore === 5) {
            playerWinCount++;
            result.textContent = "WinRar! You won! Click one of the three buttons to play again.";
            player_wins.textContent = "player games won: " + playerWinCount;
            restartGame();
        }
        console.log("player score:", playerScore, " computer score:", computerScore, " player wins:", playerWinCount, " computer wins: ", computerWinCount);
        return playerScore;
    }
}


function restartGame() {
    playerScore = 0;
    computerScore = 0;
}