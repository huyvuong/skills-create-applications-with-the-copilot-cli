#!/usr/bin/env node
'use strict'

/**
 * CLI Calculator
 * Supported operations:
 *  - add : addition (a + b)
 *  - sub : subtraction (a - b)
 *  - mul : multiplication (a * b)
 *  - div : division (a / b)
 *
 * Usage examples:
 *  node src/calculator.js add 2 3    # -> 5
 *  node src/calculator.js sub 5 2    # -> 3
 *  node src/calculator.js mul 3 4    # -> 12
 *  node src/calculator.js div 10 2   # -> 5
 *
 * The CLI validates numeric input and exits with a non-zero code on error.
 */

const [, , cmd, aStr, bStr] = process.argv

function showHelp(code = 0) {
  console.log('Usage: node src/calculator.js <operation> <a> <b>')
  console.log('\nOperations:')
  console.log('  add    addition       -> a + b')
  console.log('  sub    subtraction    -> a - b')
  console.log('  mul    multiplication -> a * b')
  console.log('  div    division       -> a / b')
  console.log('\nExamples:')
  console.log('  node src/calculator.js add 2 3    # -> 5')
  console.log('  node src/calculator.js div 10 2   # -> 5')
  process.exit(code)
}

if (!cmd || cmd === '--help' || cmd === '-h') {
  showHelp(0)
}

if (!aStr || !bStr) {
  console.error('Error: missing operands. Expected two numeric arguments.')
  showHelp(2)
}

const a = Number(aStr)
const b = Number(bStr)

if (!Number.isFinite(a) || !Number.isFinite(b)) {
  console.error('Error: operands must be valid numbers.')
  process.exit(1)
}

function exitWithError(msg, code = 1) {
  console.error('Error:', msg)
  process.exit(code)
}

let result
switch (cmd) {
  case 'add':
    result = a + b
    break
  case 'sub':
    result = a - b
    break
  case 'mul':
    result = a * b
    break
  case 'div':
    if (b === 0) exitWithError('division by zero', 2)
    result = a / b
    break
  default:
    console.error(`Error: unknown operation '${cmd}'.`)
    showHelp(2)
}

// Print the result. For integer-like results, print without trailing .0
if (Number.isInteger(result)) console.log(result)
else console.log(result)

process.exit(0)
