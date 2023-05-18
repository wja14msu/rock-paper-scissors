function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));