function merge (left = [], right = []) {
  const result = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return result.concat(left, right)
}

module.exports = function mergeSort (arr = []) {
  if (arr.length < 2) return arr

  const pivot = Math.floor(arr.length / 2)
  const left = arr.slice(0, pivot)
  const right = arr.slice(pivot)

  return merge(mergeSort(left), mergeSort(right))
}
