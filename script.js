//create a function called getComputerChoice that choose between rock paper and scissors
const computerChoice = ["rock" , "paper", "scissors"]

function getComputerChoice() {
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))]
    
}

//funtion that plays 1 round of rock paper scissors 

    let playerSelection,computerSelection
    
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What is your choice?")
    computerSelection = getComputerChoice()
   
    if (playerSelection === computerSelection) {
        alert("Draw")
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {

        winner = playerSelection
        loser = computerSelection
        alert(`You Win! ${winner} beats ${loser}`)
    }
    else {
        winner = computerSelection
        loser = playerSelection
        alert(`You Lose! ${winner} beats ${loser}`)
    }

    
}


//make the game score up to 5 by making function game()
// assign variable that determine how many rounds will be the game


function game() {
    let rounds = prompt("Input desired game rounds: ")
    for (let i = 1; i <= rounds; i++) {
    console
    }
}


