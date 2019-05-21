import LinkedList from '../../lib/data-structures/linked-list'

describe('LinkedList', () => {
  test('new', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toEqual(null)
    expect(linkedList.length).toEqual(0)
  })

  test('get', () => {
    const linkedList = new LinkedList()
    expect(() => {
      linkedList.get(0)
    }).toThrow(new Error('Position outside of list range.'))
  })

  test('add - 1', () => {
    const linkedList = new LinkedList()
    linkedList.add('1', 0)
    expect(linkedList.head).toEqual({ value: '1', next: null })
    expect(linkedList.length).toEqual(1)
  })

  test('add - 2', () => {
    const linkedList = new LinkedList()
    expect(() => {
      linkedList.add('2', 1)
    }).toThrow(new Error('Position outside of list range.'))
    expect(linkedList.head).toEqual(null)
    expect(linkedList.length).toEqual(0)
  })

  test('add - 3', () => {
    const linkedList = new LinkedList()
    linkedList.add('1', 0)
    linkedList.add('2', 1)
    expect(linkedList.head).toEqual({
      value: '1',
      next: { value: '2', next: null }
    })
    expect(linkedList.length).toEqual(2)
  })

  test('remove - 1', () => {
    const linkedList = new LinkedList()
    expect(() => {
      linkedList.remove(0)
    }).toThrow(new Error('Removing from empty list.'))
    expect(linkedList.head).toEqual(null)
    expect(linkedList.length).toEqual(0)
  })

  test('remove - 2', () => {
    const linkedList = new LinkedList()
    linkedList.add('1', 0)
    expect(() => {
      linkedList.remove(1)
    }).toThrow()
    expect(linkedList.head).toEqual({ value: '1', next: null })
    expect(linkedList.length).toEqual(1)
  })

  test('remove - 3', () => {
    const linkedList = new LinkedList()
    linkedList.add('1', 0)
    linkedList.add('2', 1)

    linkedList.remove(1)
    expect(linkedList.head).toEqual({ value: '1', next: null })
    expect(linkedList.length).toEqual(1)

    linkedList.add('2', 1)
    linkedList.remove(0)
    expect(linkedList.head).toEqual({ value: '2', next: null })
    expect(linkedList.length).toEqual(1)
  })
})
