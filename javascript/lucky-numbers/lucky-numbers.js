// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let digits = ""

  for (let digit of array1) {
    digits += digit
  }

  const firstNumber = Number(digits)

  digits = ""

  for (let digit of array2) {
    digits += digit
  }

  const secondNumber = Number(digits)

  return firstNumber + secondNumber
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numberAsString = String(value)
  for (let i = 0; i < numberAsString.length; i++) {
    if (numberAsString[i] !== numberAsString[numberAsString.length - (i + 1)]) {
      return false
    }
  }

  return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === '') {
    return 'Required field'
  } else if (Number(input)) {
    return ''
  } else {
    return 'Must be a number besides 0'
  }
}
