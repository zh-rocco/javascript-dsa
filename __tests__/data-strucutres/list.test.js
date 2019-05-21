import List from '../../lib/data-structures/list'

describe('List', () => {
  test('new', () => {
    const list = new List()
    expect(list).toHaveProperty('memory')
    expect(list).toHaveProperty('length')
    expect(list.memory).toEqual([])
    expect(list.length).toEqual(0)
  })

  test('get', () => {
    const list = new List()
    list.push(0)
    list.push(1)
    expect(list.get(0)).toEqual(0)
    expect(list.get(1)).toEqual(1)
  })

  test('push', () => {
    const list = new List()
    list.push(0)
    expect(list.memory).toEqual([0])
    expect(list.length).toEqual(1)
    list.push(1)
    expect(list.memory).toEqual([0, 1])
    expect(list.length).toEqual(2)
  })

  test('pop', () => {
    const list = new List()
    list.push(0)
    list.push(1)
    expect(list.pop()).toEqual(1)
    expect(list.get(0)).toEqual(0)
    expect(list.get(1)).toEqual(undefined)
    expect(list.length).toEqual(1)
  })

  test('unshift', () => {
    const list = new List()
    list.push(1)
    list.unshift(0)
    expect(list.memory).toEqual([0, 1])
    expect(list.length).toEqual(2)
  })

  test('shift', () => {
    const list = new List()
    list.push(0)
    list.push(1)
    list.shift()
    expect(list.get(0)).toEqual(1)
    expect(list.length).toEqual(1)
  })
})
