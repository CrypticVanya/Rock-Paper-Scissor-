
const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)]
let choice = pickOne(['rock', 'paper', 'scissor'])
const computerSelection = computerPlay()

function computerPlay() {
    return choice   
}

console.log(computerSelection)

const playerSelection = "scissor"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You LOSE, rock is weak against paper")
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log("you WIN, rock beats scissor")
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log("You WIN, scissors cuts paper")
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        console.log("You LOSE, scissor gets smashed by rock")
    } else {
        console.log("It is a tie, try again")
    }
}


let winner = playRound(playerSelection, computerSelection)
