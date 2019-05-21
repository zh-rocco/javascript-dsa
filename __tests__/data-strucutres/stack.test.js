import Stack from '../../lib/data-structures/stack'

describe('Stack', () => {
  test('new', () => {
    const stack = new Stack()
    expect(stack.list).toEqual([])
    expect(stack.length).toEqual(0)
  })

  test('push', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.list).toEqual([1])
    expect(stack.length).toEqual(1)
  })

  test('pop', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toEqual(2)
    expect(stack.list).toEqual([1])
    expect(stack.length).toEqual(1)
  })

  test('peek', () => {
    const stack = new Stack()
    expect(stack.peek()).toEqual(undefined)

    stack.push(1)
    stack.push(2)

    expect(stack.peek()).toEqual(2)
    expect(stack.list).toEqual([1, 2])
    expect(stack.length).toEqual(2)
  })
})
