const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "player";
    } else {
        return "computer";
    }

}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "tie") {
        return "its a tie! ";

    } else if (result == "player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${playerSelection} beats ${computerSelection}`;
    }
}

const playerSelection = prompt("choose: ")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
const lowercase = playerSelection.toLowerCase()