/**
 * A hash table is a data structure that's *unordered*. Instead we have "keys" and "values" where we
 * computed an address in memory using the key.
 */

export default class HashTable {
  constructor () {
    this.memory = [] // meaning physical memory
  }

  /**
   * Hash Algorithm
   *
   * @param {string} key
   * @return {number} hash
   */
  hashKey (key) {
    let hash = 0
    for (let idx = 0; idx < key.length; idx++) {
      const code = key.charCodeAt(idx)
      hash = ((hash << 5) - hash + code) | 0
    }
    return hash
  }

  /**
   * Access values by key.
   *
   * HashTable access is constant O(1) - "AWESOME!!"
   */
  get (key) {
    const address = this.hashKey(key)
    return this.memory[address]
  }

  /**
   * Insert values.
   *
   * HashTable setting is constant O(1) - "AWESOME!!"
   */
  set (key, value) {
    const address = this.hashKey(key)
    return (this.memory[address] = value)
  }

  /**
   * Remove item.
   *
   * HashTable deletion is constant O(1) - "AWESOME!!"
   */
  remove (key) {
    const address = this.hashKey(key)
    if (this.memory[address] !== undefined) {
      delete this.memory[address]
    }
  }
}
