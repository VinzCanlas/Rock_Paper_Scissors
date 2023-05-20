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
        return null;
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {

        winner = playerSelection
        loser = computerSelection
        alert(`You Win! ${winner} beats ${loser}`)
        return true;
    }
    else {
        winner = computerSelection
        loser = playerSelection
        alert(`You Lose! ${winner} beats ${loser}`)
        return false;
    }

    
}

//make the game score up to 5 by making function game()
// assign variable that determine how many rounds will be the game
let playerScore = 0, computerScore = 0
function game(rounds) {
    rounds = prompt("Input desired game rounds: ")

    for (let i = 1; i <= rounds; i++) {
    alert("Round:" + i)
    let result = playRound(playerSelection, computerSelection)

    if (result == true) {
        playerScore++
        alert(`Current Score`)
        alert(`Player: ${playerScore}`)
        alert(`Computer: ${computerScore}`)
    }
    else if (result == false) {
        computerScore++
        alert(`Current Score`)
        alert(`Player: ${playerScore}`)
        alert(`Computer: ${computerScore}`)
    }
    else {
        alert(`Current Score`)
        alert(`Player: ${playerScore}`)
        alert(`Computer: ${computerScore}`)
    }
    }
    if (playerScore === computerScore){
        alert(`No Winner`)
        }
    else if (playerScore < computerScore){
    alert(`Winner: Computer`)
    }
    else {
        alert(`Winner: Computer`)
    }
    alert(`Player: ${playerScore} | Computer: ${computerScore}`)
}
    
    

game()