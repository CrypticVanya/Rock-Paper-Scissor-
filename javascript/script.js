let myScore = 0
let compScore = 0
let playerSelection = 'rock'
let youWin = "congrats, you have won this round!"
let youLost = "oh no, you have lost this round!"
let youTie = "its a tie, try again"


let compSelect = ['rock', 'paper', 'scissor']

function compRandomSelect() {
    return compSelect[Math.floor(Math.random()*compSelect.length)]
}

let computerSelection = compRandomSelect()


function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
            console.log(`${youWin}, Your score: ${myScore+=1} & ${compScore}`)
        } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
                    (playerSelection === 'paper' && computerSelection === 'rock') ||
                    (playerSelection === 'scissor' && computerSelection === 'rock')) {
                        console.log(`${youLost}, your score: ${myScore} & Computer Score: ${compScore+=1}`)
                    } else {
                        console.log("tie")
                    }
}


function newGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("round #" + i)
        let computerSelection = compRandomSelect()
        console.log(computerSelection)
        playRound(playerSelection, computerSelection)
    } (console.log("winner:"))
    if (myScore > compScore) {
        console.log("player wins")
    } else if (myScore < compScore) {
        console.log("computer wins")
    } else {
        console.log("its a tie")
    }
}

newGame()
