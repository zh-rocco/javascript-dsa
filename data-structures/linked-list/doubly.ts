class DoublyListNode {
  public value: number | string
  public prev: DoublyListNode | null
  public next: DoublyListNode | null

  constructor(value: number | string) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  public head: DoublyListNode | null
  public length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  find(value: number | string) {
    let current = this.head

    while (current && current.value !== value) {
      current = current.next
    }

    return current
  }

  findPrevious(value: number | string) {
    let current = this.head

    while (current && current.next && current.next.value !== value) {
      current = current.next
    }

    return current
  }

  add(value: number | string) {
    const node = new DoublyListNode(value)

    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head

      while (current && current.next) {
        current = current.next
      }

      current.next = node
      node.prev = current
    }

    this.length++

    return this
  }

  remove(value: number | string) {
    if (!this.head) {
      throw new Error('Removing from empty list.')
    }

    const currentElement = this.find(value)

    if (currentElement) {
      const previousElement = currentElement.prev
      const nextElement = currentElement.next

      if (previousElement) {
        previousElement.next = nextElement

        if (nextElement) {
          nextElement.prev = previousElement
        }

        this.length--
      }
    }





    return this
  }

  toArray() {
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.value)
      current = current.next
    }

    return arr
  }
}

const cities = new DoublyLinkedList()

cities.add('北京').add('上海').add('广州').add('深圳')

console.log(cities)
console.log(cities.length)

// console.log(cities.find('广州'))
// console.log(cities.findPrevious('广州'))

cities.remove('广州')

console.log(cities)
console.log(cities.length)