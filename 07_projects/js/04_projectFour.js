// Generic formula for a given range between min and max
// const min = 10
// const max = 20
// console.log(Math.random() * (max - min) + min) // returns a random number between 10(inclusive) and 20(exclusive)

// console.log(Math.round((Math.random() * (100 - 1)) + 1));

// Below all comments are mine ================================================

let randomNumber = Math.round(Math.random() * (100 - 1) + 1) // you are using const instead of let and later trying to change inside startOver function
const userInput = document.querySelector('#guessInput')
const submitBtn = document.querySelector('#subt')
const guess = document.querySelector('#guess')
const lastResult = document.querySelector('#last-result')
const lowOrHi = document.querySelector('.lowOrHi')
const result = document.querySelector('.result-paras')
const start = document.querySelector('#Start') // it is #Start not #start

let prevGuess = []
let gamePlay = true
let guessCount = 0

let p1 = document.createElement('p')

// Functions

if (gamePlay) {
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let input = parseInt(userInput.value)
    validateInput(input)
  })
}

function validateInput(input) {
  if (isNaN(input)) {
    alert(
      `'${input}' is not a number! Please enter a number between 1 and 100`
    )
  } else if (input < 1) {
    alert(
      `'${input}' is less than 1! Please enter a number between 1 and 100`
    )
  } else if (input > 100) {
    alert(
      `'${input}' is more than 100! Please enter a number between 1 and 100`
    )
  } else {
    guessCount++
    displayGuess(input)
    prevGuess.push(input)
    checkGuess(input)
  }
}

function checkGuess(input) {
  if (guessCount >= 10) {
    if (input === randomNumber) {
      displayMessage(
        `Congratulations! You guessed the number! '${input}'`
      )
    } else if (input <= randomNumber) {
      displayMessage(`'${input}' is too low!`)
    } else {
      displayMessage(`'${input}' is too high!`)
    }
    endGame()
  } else {
    if (input === randomNumber) {
      displayMessage(`Congratulations! You guessed the number!`)
      endGame()
    } else if (input <= randomNumber) {
      displayMessage(`'${input}' is too low!`)
    } else {
      displayMessage(`'${input}' is too high!`)
    }
  }
}

function displayGuess(input) {
  userInput.value = ''
  guess.innerHTML += `${input}, `
  lastResult.innerHTML = `${10 - guessCount}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  gamePlay = false
  // userInput.disabled = true;
  userInput.setAttribute('disabled', true)
  submitBtn.setAttribute('disabled', true)
  submitBtn.style.backgroundColor = 'grey'

  p1.setAttribute('id', 'game-over')
  p1.innerHTML = `<h1>!!!Game Over!!!</h1>`
  result.appendChild(p1)
  start.classList.toggle('hidden') // show start button using class
}

function startOver() {
  result.removeChild(p1)
  start.classList.toggle('hidden') // hide start button using class
  gamePlay = true
  guessCount = 0
  prevGuess = []
  randomNumber = Math.round(Math.random() * (100 - 1) + 1)
  guess.innerHTML = ''
  lastResult.innerHTML = ''
  lowOrHi.innerHTML = ''
  userInput.removeAttribute('disabled')
  submitBtn.removeAttribute('disabled')
  submitBtn.style.backgroundColor = '#212121'
}

start.addEventListener('click', function (event) {
  event.preventDefault()
  startOver()
})

// maintain same name for id and class in html and css and js
