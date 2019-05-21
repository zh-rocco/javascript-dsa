import Queue from '../../lib/data-structures/queue'

describe('Queue', () => {
  test('new', () => {
    const queue = new Queue()
    expect(queue.list).toEqual([])
    expect(queue.length).toEqual(0)
  })

  test('enqueue', () => {
    const queue = new Queue()
    queue.enqueue(1)
    expect(queue.list).toEqual([1])
    expect(queue.length).toEqual(1)
  })

  test('dequeue', () => {
    const queue = new Queue()
    expect(queue.dequeue()).toEqual(undefined)

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.dequeue()).toEqual(1)
    expect(queue.list).toEqual([2])
    expect(queue.length).toEqual(1)
  })

  test('peek', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.peek()).toEqual(1)
    expect(queue.list).toEqual([1, 2])
    expect(queue.length).toEqual(2)
  })
})
