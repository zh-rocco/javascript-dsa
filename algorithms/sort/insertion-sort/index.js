const { swap } = require('../../utils')

module.exports = function InsertionSort (arr = []) {
  for (let outer = 1; outer < arr.length; outer++) {
    let inner = outer - 1
    while (inner >= 0) {
      if (arr[inner + 1] < arr[inner]) {
        swap(arr, inner + 1, inner)
      }
      inner--
    }
  }
}
