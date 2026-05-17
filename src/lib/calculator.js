'use strict'

/**
 * Calculator library
 * Exports: add, sub, mul, div
 * - div throws Error('division by zero') when dividing by 0
 * - All functions validate that inputs are finite numbers and throw TypeError if not
 */

function validateNumber(n) {
  if (!Number.isFinite(n)) throw new TypeError('operands must be finite numbers')
}

function add(a, b) {
  validateNumber(a)
  validateNumber(b)
  return a + b
}

function sub(a, b) {
  validateNumber(a)
  validateNumber(b)
  return a - b
}

function mul(a, b) {
  validateNumber(a)
  validateNumber(b)
  return a * b
}

function div(a, b) {
  validateNumber(a)
  validateNumber(b)
  if (b === 0) throw new Error('division by zero')
  return a / b
}

function modulo(a, b) {
  validateNumber(a)
  validateNumber(b)
  if (b === 0) throw new Error('division by zero')
  return a % b
}

function power(base, exponent) {
  validateNumber(base)
  validateNumber(exponent)
  return Math.pow(base, exponent)
}

function squareRoot(n) {
  validateNumber(n)
  if (n < 0) throw new Error('square root of negative number')
  return Math.sqrt(n)
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot }
