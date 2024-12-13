const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const buttons = calculator.querySelectorAll('.calculator__button')

let currentOperand = ''
let previousOperand = ''
let operation = undefined

function updateDisplay() {
  display.innerText = currentOperand || '0'
}

function appendNumber(number) {
 
  if (number === '.' && currentOperand.includes('.')) return
  currentOperand = currentOperand.toString() + number.toString()
  updateDisplay()
}

function chooseOperation(op) {
  if (currentOperand === '') return
  if (previousOperand !== '') {
    compute()
  }
  operation = op
  previousOperand = currentOperand
  currentOperand = ''
}

function compute() {
  let computation
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '/':
      computation = current !== 0 ? prev / current : 'Error'
      break
    default:
      return
  }
  currentOperand = computation.toString()
  operation = undefined
  previousOperand = ''
  updateDisplay()
}

function clear() {
  currentOperand = ''
  previousOperand = ''
  operation = undefined
  updateDisplay()
}


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value')
    if (button.classList.contains('operator')) {
      chooseOperation(value)
    } else if (button.classList.contains('calculate')) {
      compute()
    } else if (button.classList.contains('clear')) {
      clear()
    } else {
      appendNumber(value)
    }
  })
})
updateDisplay()
