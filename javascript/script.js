
const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)]

let choice = pickOne(["rock", "paper", "scissor"])

function computerPlay() {
    return choice
}

console.log(computerPlay())

