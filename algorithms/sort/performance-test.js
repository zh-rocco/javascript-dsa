const { createArray } = require('../utils')

const builtInSort = require('./built-in-sort')
const bubbleSort = require('./bubble-sort')
const selectionSort = require('./selection-sort')
const insertionSort = require('./insertion-sort')
const quickSort = require('./quick-sort')
const inPlaceQuickSort = require('./in-place-quick-sort')
const mergeSort = require('./merge-sort')
const bucketSort = require('./bucket-sort')

const sorts = [
  builtInSort,
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  inPlaceQuickSort,
  mergeSort
]

const origin = createArray(10 * 1000)
// const origin = [0, 9, 6, 1, 7]
// console.log('origin:', origin)

for (const sort of sorts) {
  const name = sort.name
  const arr = origin.slice()
  console.time(name)
  sort(arr)
  console.timeEnd(name)
}

const arr = origin.slice()
console.time('bucketSort')
bucketSort(arr, Math.ceil(arr.length / 10))
console.timeEnd('bucketSort')
