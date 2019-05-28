/**
 * Lists are great for fast access and dealing with items at the end. However,
 * as we've seen it isn't great at dealing with items not at the end of the
 * list and we have to manually hold onto memory addresses.
 */

export default class List {
  constructor () {
    this.memory = [] // meaning physical memory
    this.length = 0
  }

  /**
   * Retrieve data from list.
   *
   * Time complexity: O(1) - "AWESOME!!"
   */
  get (address) {
    return this.memory[address]
  }

  /**
   * Add value to the end.
   *
   * Time complexity: O(1) - "AWESOME!!"
   */
  push (value) {
    this.memory[this.length] = value
    this.length++
  }

  /**
   * Remove a value from the end.
   *
   * Time complexity: O(1) - "AWESOME!!"
   */
  pop () {
    if (this.length === 0) return

    const lastAddress = this.length - 1
    const value = this.memory[lastAddress]
    delete this.memory[lastAddress]
    this.length--

    return value
  }

  /**
   * Add value to the start.
   *
   *     [a, b, c, d, e]
   *      0  1  2  3  4
   *       ⬊  ⬊  ⬊  ⬊  ⬊
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]
   *
   * Time complexity: O(N) - "OKAY."
   */
  unshift (value) {
    let previous = value

    for (let address = 0; address < this.length; address++) {
      const current = this.memory[address]
      this.memory[address] = previous
      previous = current
    }

    this.memory[this.length] = previous
    this.length++
  }

  /**
   * Remove a value from the start.
   *
   *     [x, a, b, c, d, e]
   *         1  2  3  4  5
   *       ⬋  ⬋  ⬋  ⬋  ⬋
   *      0  1  2  3  4
   *     [a, b, c, d, e]
   *
   * Time complexity: O(N) - "OKAY."
   */
  shift () {
    if (this.length === 0) return

    const value = this.memory[0]

    for (let address = 0; address < this.length - 1; address++) {
      this.memory[address] = this.memory[address + 1]
    }

    delete this.memory[this.length - 1]
    this.length--

    return value
  }
}
