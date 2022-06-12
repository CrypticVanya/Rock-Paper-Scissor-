<<<<<<< HEAD
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

=======
//Create an array that contains the choises of "rock, paper, scissor" game then randomizing a pick with Math.random

let compChoises = ['rock', 'paper', 'scissor']
let myScore = 1
let compScore = 1

function randomCompSelect() {
    return compChoises[Math.floor(Math.random()* compChoises.length)]
}


//plays the game when an option is selected

const buttons = document.querySelectorAll('.selection')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id
        let computerSelection = randomCompSelect()
        playRound(playerSelection, computerSelection) 

        if (myScore === 6 || compScore === 6){
            gameWinner()
            resetGame()
        }    
    });
});


//Create and obtain the player selection from the UI
>>>>>>> rps-ui

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
<<<<<<< HEAD
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
=======
            `${messagEl('Congrats, you get a point')} + ${playerScore(myScore++)}}`
    } else if ((playerSelection === 'rock' && computerSelection === 'paper')||
        (playerSelection === 'paper' && computerSelection === 'scissor')||
        (playerSelection === 'scissor' && computerSelection === 'rock')) {
            `${messagEl('Oh no, enemy gets a point')} + ${computerScore(compScore++)}`
    } else {
            `${messagEl('Try again, it is a tie')}`
    } 
}


//function for declaration messages

function messagEl(message) {
    const displayMessage = document.querySelector('#display-message')
    displayMessage.textContent = message;
}


// functions to keep track of score

function playerScore(myScore) {
    const keepPlayerScore = document.querySelector('#player')
    keepPlayerScore.textContent = myScore
}

function computerScore(compScore) {
    const keepComputerScore = document.querySelector('#computer')
    keepComputerScore.textContent = compScore
}


// function to declare the winner

function gameWinner() {
    if (myScore > compScore) {
        winningEl("Congrats, you won the game!")
    } else {
        losingEl("Sorry, you have lost the game!")
    }
}

// function that resets the game

function resetGame() {
    myScore = 1
    compScore = 1
    computerScore(0)
    playerScore(0)
}

//function to create winning message

function winningEl(message) {
    const displayMessage = document.querySelector('#display-message');
    displayMessage.textContent = message;
}

function losingEl(message) {
    const displayMessage = document.querySelector('#display-message');
    displayMessage.textContent = message;
}
    
>>>>>>> rps-ui
