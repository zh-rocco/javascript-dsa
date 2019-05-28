/**
 * Linked lists are a very common data structure that is often used to
 * implement other data structures because of its ability to efficiently add
 * items to the start, middle, and end.
 *
 * Visualizing them as a JSON-like structure looks like this:
 *
 *     {
 *       value: 1,
 *       next: {
 *         value: 2,
 *         next: {
 *           value: 3,
 *           next: {...}
 *         }
 *       }
 *     }
 */

export default class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  get (position) {
    if (position >= this.length) {
      throw new Error('Position outside of list range.')
    }

    let current = this.head

    for (let idx = 0; idx < position; idx++) {
      current = current.next
    }

    return current
  }

  add (value, position) {
    const node = { value, next: null }

    if (position === 0) {
      node.next = this.head
      this.head = node
    } else {
      const prev = this.get(position - 1)
      const current = prev.next

      node.next = current
      prev.next = node
    }

    this.length++
  }

  remove (position) {
    if (!this.head) {
      throw new Error('Removing from empty list.')
    }

    if (position === 0) {
      this.head = this.head.next
    } else {
      const prev = this.get(position - 1)
      prev.next = prev.next.next
    }

    this.length--
  }
}
