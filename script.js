let display = document.getElementById('display')
let currentInput = ''
let operator = null
let firstOperand = null

function appendNumber(number) {
  if (currentInput.length >= 15) return
  currentInput += number
  updateDisplay()
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.'
  }
  updateDisplay()
}

function setOperator(op) {
  if (currentInput === '') return
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput)
  } else {
    calculateResult()
  }
  operator = op
  currentInput = ''
}

function calculateResult() {
  if (operator === null || currentInput === '') return
  let secondOperand = parseFloat(currentInput)
  let result = 0

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand
      break
    case '-':
      result = firstOperand - secondOperand
      break
    case '*':
      result = firstOperand * secondOperand
      break
    case '/':
      if (secondOperand === 0) {
        alert('Error: Division by zero')
        clearDisplay()
        return
      }
      result = firstOperand / secondOperand
      break
  }

  currentInput = parseFloat(result.toFixed(10)).toString()
  firstOperand = null
  operator = null
  updateDisplay()
}

function clearDisplay() {
  currentInput = ''
  operator = null
  firstOperand = null
  updateDisplay()
}

function updateDisplay() {
  display.textContent = currentInput || '0'
}
