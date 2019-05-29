const { swap } = require('../../utils')

module.exports = function bucketSort (arr = [], num = 2) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const buckets = []
  const bucketsSize = Math.ceil((max - min) / num)

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(arr[i] / bucketsSize)

    if (!buckets[index]) {
      buckets[index] = []
    }

    buckets[index].push(arr[i])

    let len = buckets[index].length

    while (len > 0) {
      if (buckets[index][len] < buckets[index][len - 1]) {
        swap(buckets[index], len, len - 1)
      }
      len--
    }
  }

  const wrapBuckets = []

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i]) {
      wrapBuckets.push(...buckets[i])
    }
  }

  return wrapBuckets
}
