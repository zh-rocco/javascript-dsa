const { swap } = require('../../utils')

function childSort (buckets, index, value) {
  if (!buckets[index]) {
    buckets[index] = []
  }

  buckets[index].push(value)

  let len = buckets[index].length

  while (len > 0) {
    if (buckets[index][len] < buckets[index][len - 1]) {
      swap(buckets[index], len, len - 1)
    }
    len--
  }
}

module.exports = function bucketSort (arr = [], num = 2) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const buckets = [] // positive buckets
  const negativeBuckets = [] // negative buckets
  const bucketsSize = Math.ceil((max - min) / num) || 1

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(arr[i] / bucketsSize)

    if (index < 0) {
      childSort(negativeBuckets, Math.abs(index), arr[i])
    } else {
      childSort(buckets, index, arr[i])
    }
  }

  console.log(buckets, negativeBuckets)

  const wrapBuckets = []

  for (let i = negativeBuckets.length; i > -1; i--) {
    if (negativeBuckets[i]) {
      wrapBuckets.push(...negativeBuckets[i])
    }
  }

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i]) {
      wrapBuckets.push(...buckets[i])
    }
  }

  return wrapBuckets
}
