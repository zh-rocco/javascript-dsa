/**
 * Remove items from the start of the queue rather than the end.
 * Removing the oldest items rather than the most recent.
 */

export default class Queue {
  constructor () {
    this.list = [] // meaning queue is a list, List's instance, is better to use a linked list
    this.length = 0
  }

  /**
   * Push values to the end of the list.
   *
   * Time complexity: O(1) - "AWESOME!!"
   */
  enqueue (value) {
    this.length++
    this.list.push(value)
  }

  /**
   * Remove it from the start.
   *
   * Time complexity: O(n) - "OKAY.", because of shift()
   */
  dequeue () {
    if (this.length === 0) return

    this.length--
    return this.list.shift()
  }

  /**
   * Get the next value without removing it from the queue.
   *
   * Time complexity: O(1) - "AWESOME!!"
   */
  peek () {
    return this.list[0]
  }
}
