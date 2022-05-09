let compChoises = ['rock', 'paper', 'scissor']

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
    });
});

//Create and obtain the player selection from the ui

function playRound(playerSelection, computerSelection) {
       
       if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
             `${messagEl('Congrats, you have won')}`
        } else if ((playerSelection === 'rock' && computerSelection === 'paper')||
                    (playerSelection === 'paper' && computerSelection === 'scissor')||
                    (playerSelection === 'scissor' && computerSelection === 'rock')) {
                        `${messagEl('Oh no, You have Lost')}`
                    } else {
                         `${messagEl('try again, it is a tie')}`
                    }
}


//plays one round using playerSelect and computerSelect

function messagEl(message) {
const displayMessage = document.querySelector('#display-message')
displayMessage.classList.add('displayMessage')
displayMessage.textContent = message;
}