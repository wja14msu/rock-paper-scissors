let roundCount = 0;
let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let result = ''

function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("tie");
        result = "tie";
        return tieCount++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("lose");
        result = "lose";
        return loseCount++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("win");
        result = "win";
        return winCount++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("win");
        result = "win";
        return winCount++;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("tie");
        result = "tie";
        return tieCount++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("lose");
        result = "lose";
        return loseCount++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("lose");
        result = "lose";
        return loseCount++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("win");
        result = "win";
        return winCount++;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("tie");
        result = "tie";
        return tieCount++;
    }
    result = document.getElementById("result");
    result.innerHTML = result;
    return [result, winCount, loseCount, tieCount];
    console.log(winCount, loseCount, tieCount);
}

//let playerSelection = prompt();
//playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
//console.log("player: ", playerSelection, "computer: ", computerSelection);

let playerSelectionRock = "rock";
let playerSelectionPaper = "paper";
let playerSelectionScissors = "scissors";