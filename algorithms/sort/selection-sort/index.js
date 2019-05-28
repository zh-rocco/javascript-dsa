const { swap } = require('../../utils')

module.exports = function selectionSort (arr = []) {
  let min
  for (let outer = 0; outer < arr.length - 1; outer++) {
    min = outer
    for (let inner = outer + 1; inner < arr.length; inner++) {
      if (arr[min] > arr[inner]) {
        min = inner
      }
    }
    swap(arr, outer, min)
  }
}

// module.exports = function selectionSort (arr = []) {
//   for (let outer = 0; outer < arr.length; outer++) {
//     for (let inner = outer + 1; inner < arr.length; inner++) {
//       if (arr[outer] > arr[inner]) {
//         swap(arr, outer, inner)
//       }
//     }
//   }
// }
