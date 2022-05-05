
let myScore = 0
let compScore = 0

let compSelect = ['rock', 'paper', 'scissor']
const computerPlay = function() {
    randomPick = compSelect[Math.floor(Math.random() * compSelect.length)]
    return randomPick
}
playerSelection = 'rock'
computerSelection = computerPlay()

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')){
            console.log(` ${youWon}, ${myScore+=1} `)
        } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
                    (playerSelection === 'paper' && computerSelection === 'scissor') ||
                    (playerSelection === 'scissor' && computerSelection === 'rock')){
                        console.log(`${youLost}, ${compScore+=1}`)
                    } else {
                        console.log(`${itsATie}`)
                    }
                    

    }


    let youWon = "you won!"
    let youLost = "TRY AGAIN"
    let itsATie = "tie"


    function game() {
        for (let i = 1; i <= 5; i++){
            console.log("round #" + i)
            const playerSelection = 'rock'
            const computerSelection = computerPlay()
            playRound(playerSelection, computerSelection)
        }
        console.log("game over")
        if (myScore > compScore) {
            console.log("player wins")
        } else if (myScore < compScore) {
            console.log("player loses") 
        } else {
            console.log("tie")
        }

    }

    game()
