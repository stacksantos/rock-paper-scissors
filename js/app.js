const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const yourScoreDisplay = document.getElementById('your-score')
const computerScoreDisplay = document.getElementById('computer-score')
let userChoice
let computerChoice
let yourScore = 0
let computerScore = 0


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    addScore()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'ITS A DRAW!'
    } else if (computerChoice === 'Rock' && userChoice == 'Scissors' || computerChoice === 'Scissors' && userChoice === 'Paper' || computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'YOU LOSE!'
    } else {
        result = 'YOU WIN!'
    }
    resultDisplay.innerHTML = result;
}

addScore = () => {
    if (result === 'YOU WIN!') {
        yourScore++
    } else if (result === 'YOU LOSE!') {
        computerScore++
    } else {
        result;
    }

    yourScoreDisplay.innerHTML = yourScore;
    computerScoreDisplay.innerHTML = computerScore;
}
