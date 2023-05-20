//create a function called getComputerChoice that choose between rock paper and scissors
const computerChoice = ["rock" , "paper", "scissors"]
function getComputerChoice() {
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))]
    
}
console.log(getComputerChoice())
