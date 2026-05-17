const calc = require('../lib/calculator')

describe('CLI calculator library', () => {
  test('adds 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5)
  })

  test('subtracts 10 - 4 = 6', () => {
    expect(calc.sub(10, 4)).toBe(6)
  })

  test('multiplies 45 * 2 = 90', () => {
    expect(calc.mul(45, 2)).toBe(90)
  })

  test('divides 20 / 5 = 4', () => {
    expect(calc.div(20, 5)).toBe(4)
  })

  test('division by zero throws', () => {
    expect(() => calc.div(1, 0)).toThrow('division by zero')
  })

  test('operands must be finite numbers', () => {
    expect(() => calc.add('a', 2)).toThrow(TypeError)
    expect(() => calc.mul(1, NaN)).toThrow(TypeError)
  })
})
