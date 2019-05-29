module.exports = function quickSort (arr = []) {
  if (arr.length < 2) return arr

  const left = []
  const right = []
  const pivotValue = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivotValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)]
}
