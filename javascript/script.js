let compChoises = ['rock', 'paper', 'scissor']
let myScore = 1
let compScore = 1

function randomCompSelect() {
    return compChoises[Math.floor(Math.random()* compChoises.length)]
}


//Create an array that contains the choises of "rock, paper, scissor" game then randomizing a pick with Math.random

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

//Create and obtain the player selection from the ui

function playRound(playerSelection, computerSelection) {
 
       if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
             `${messagEl('Congrats, you have won')} + ${playerScore(myScore++)}}`
        } else if ((playerSelection === 'rock' && computerSelection === 'paper')||
                    (playerSelection === 'paper' && computerSelection === 'scissor')||
                    (playerSelection === 'scissor' && computerSelection === 'rock')) {
                        `${messagEl('Oh no, You have Lost')} + ${computerScore(compScore++)}`
                    } else {
                         `${messagEl('try again, it is a tie')}`
                    } 
       
}


//plays one round using playerSelect and computerSelect

function messagEl(message) {
const displayMessage = document.querySelector('#display-message')
displayMessage.textContent = message;
}

function playerScore(myScore) {
const keepPlayerScore = document.querySelector('#player')
keepPlayerScore.textContent = myScore
}

function computerScore(compScore) {
    const keepComputerScore = document.querySelector('#computer')
    keepComputerScore.textContent = compScore
}

function gameWinner() {
    if (myScore > compScore) {
        messagEl("Congrats, you have won the game!")
    } else {
        messagEl("Sorry, you have lost the game!")
    }
}


function resetGame() {
    myScore = 1
    compScore = 1
    computerScore(0)
    playerScore(0)
}