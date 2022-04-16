const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const yourScoreDisplay = document.getElementById('your-score')
const computerScoreDisplay = document.getElementById('computer-score')
const resetButton = document.getElementById('reset-button')
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
        result = 'TRY AGAIN!'
    } else {
        result = 'YOUR POINT!'
    }
    resultDisplay.innerHTML = result;
}

addScore = () => {
    if (result === 'YOUR POINT!') {
        yourScore++
    } else if (result === 'TRY AGAIN!') {
        computerScore++
    } else {
        result;
    }

    yourScoreDisplay.innerHTML = yourScore;
    computerScoreDisplay.innerHTML = computerScore;   
}

resetGame = () => {
    resetButton.addEventListener('click', () => {
        yourScore = 0;
        computerScore = 0;
        yourScoreDisplay.innerHTML = "0";
        computerScoreDisplay.innerHTML = "0";
        computerChoiceDisplay.innerHTML = "Choose";
        userChoiceDisplay.innerHTML = "One";
        resultDisplay.innerHTML = "Wisely!";
    })

}
resetGame()