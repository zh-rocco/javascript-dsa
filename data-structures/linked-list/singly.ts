class SinglyLinkedListNode {
  public value: number | string
  public next: SinglyLinkedListNode | null

  constructor(value: number | string) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  private head: SinglyLinkedListNode | null
  private tail: SinglyLinkedListNode | null
  public length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index: number) {
    if (index < 0 || index > this.length - 1) return null

    let current = this.head
    let i = 1

    while (i <= index) {
      current = current!.next
      i++
    }

    return current
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
    const node = new SinglyLinkedListNode(value)

    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.length++

    return this
  }

  add2(value: number | string) {
    const node = new SinglyLinkedListNode(value)

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }

    this.length++

    return this
  }

  removeByValue(value: number | string) {
    if (!this.head) {
      throw new Error('Removing from empty list.')
    }

    const prev = this.findPrevious(value)

    if (prev) {
      prev.next = prev.next!.next
      this.length--
    }
  }

  removeByIndex(index: number) {
    if (!this.head) {
      throw new Error('Removing from empty list.')
    }

    if (index < 0 || index > this.length - 1) return null

    if (index === 0) {
      this.head = this.head.next
    } else {
      const prev = this.get(index - 1)
      prev!.next = prev!.next!.next

      if (index === this.length - 1) {
        this.tail = prev
      }
    }

    this.length--
  }


  toArray() {
    const values = []
    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    return values
  }

  from(values: number[] | string[]) {
    for (const value of values) {
      this.add2(value)
    }
  }

  empty() {
    this.head = null
    this.tail = null
    this.length = 0

    return this
  }

  *values() {
    let current = this.head

    while (current) {
      yield current.value
      current = current.next
    }
  }

  [Symbol.iterator]() {
    return this.values()
  }
}

function main() {
  const cities = new SinglyLinkedList()

  cities.add2('北京').add2('上海').add2('广州').add2('深圳')

  cities.from(['成都', '杭州'])

  console.log(cities.toArray())
  console.log(cities.get(5))

  cities.removeByIndex(0)
  console.log(cities.toArray())

  cities.removeByValue('成都')
  console.log(cities.toArray())

  // console.log(cities)
  // console.log(cities.length)

  cities.add('南京')
  console.log(cities.toArray())

  // console.log(cities.find('广州'))
  // console.log(cities.findPrevious('广州'))

  // cities.removeByValue('广州')

  // console.log(cities.toArray())
  // console.log(cities)
  // console.log(cities.length)

  // cities.empty()
  // console.log(cities.toArray())

  for (const city of cities) {
    console.log(city)
  }
}

main()
