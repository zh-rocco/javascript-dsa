const { swap } = require('../utils')

function partition (arr, left, right) {
  const pivotValue = arr[right]
  let pointer = left

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pointer)
      pointer++
    }
  }

  swap(arr, right, pointer)

  return pointer
}

module.exports = function inPlaceQuickSort (arr = [], left = 0, right = arr.length - 1) {
  if (left >= right) return

  const pointer = partition(arr, left, right)
  inPlaceQuickSort(arr, left, pointer - 1)
  inPlaceQuickSort(arr, pointer + 1, right)
}
