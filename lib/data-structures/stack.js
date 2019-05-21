/**
 * Stacks are similar to lists in that they have an order, but they limit you
 * to only pushing and popping values at the end of the list, which as we saw
 * before are very fast operations when mapping directly to memory.
 */

export default class Stack {
  constructor () {
    this.list = [] // meaning stack is a list, List's instance
    this.length = 0
  }

  push (value) {
    this.length++
    this.list.push(value)
  }

  pop () {
    if (this.length === 0) return

    this.length--
    return this.list.pop()
  }

  /**
   * View the item at the top of the stack without removing it from the stack.
   *
   * Time complexity: O(1) - "AWESOME!!"
   */
  peek () {
    return this.list[this.length - 1]
  }
}
