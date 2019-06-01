const { swap } = require('../../utils')

module.exports = function bubbleSort (arr = []) {
  for (let outer = 0; outer < arr.length - 1; outer++) {
    for (let inner = 0; inner < arr.length - 1 - outer; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        swap(arr, inner, inner + 1)
      }
    }
  }

  return arr
}
