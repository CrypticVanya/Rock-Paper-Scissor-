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
        console.log(computerSelection)
        playRound(playerSelection, computerSelection)
    });
});

//Create and obtain the player selection from the ui

function playRound(playerSelection, computerSelection) {
       
       if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
            console.log("you have won")
        } else if ((playerSelection === 'rock' && computerSelection === 'paper')||
                    (playerSelection === 'paper' && computerSelection === 'scissor')||
                    (playerSelection === 'scissor' && computerSelection === 'rock')) {
                        console.log("you have lost")
                    } else {
                        console.log("Its a tie, try again!")
                    }
}

//plays one round using playerSelect and computerSelect