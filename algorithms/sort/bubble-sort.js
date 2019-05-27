const { swap } = require('../utils')

module.exports = function bubbleSort (arr = []) {
  for (let outer = 0; outer < arr.length; outer++) {
    for (let inner = outer + 1; inner < arr.length; inner++) {
      if (arr[outer] > arr[inner]) {
        swap(arr, outer, inner)
      }
    }
  }
}
