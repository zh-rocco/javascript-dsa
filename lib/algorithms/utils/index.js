function createArray (length, range = 1) {
  return Array(length).fill().map(() => Math.floor(Math.random() * (length * range + 1)))
}

function swap (arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

module.exports = {
  createArray,
  swap
}
