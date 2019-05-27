const buildInSort = require('./build-in-sort')
const bubbleSort = require('./bubble-sort')
const quickSort = require('./quick-sort')
const inPlaceQuickSort = require('./in-place-quick-sort')
const { createArray } = require('../utils')

const origin = createArray(10 * 1)
// const origin = [0, 9, 6, 1, 7]
console.log('origin:', origin)

const arr0 = origin.slice()
console.time('sort')
buildInSort(arr0)
console.timeEnd('sort')
console.log('sorted:', arr0)

const arr1 = origin.slice()
console.time('bubbleSort')
bubbleSort(arr1)
console.timeEnd('bubbleSort')
console.log('sorted:', arr1)

const arr2 = origin.slice()
console.time('quickSort')
quickSort(arr2)
console.timeEnd('quickSort')
console.log('sorted:', quickSort(arr2))

const arr3 = origin.slice()
console.time('inPlaceQuickSort')
inPlaceQuickSort(arr3)
console.timeEnd('inPlaceQuickSort')
console.log('sorted:', arr3)
