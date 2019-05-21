import Tree from '../../lib/data-structures/tree'

describe('Tree', () => {
  test('new', () => {
    const tree = new Tree()
    expect(tree.root).toEqual(null)
  })

  test('add - 1', () => {
    const tree = new Tree()
    tree.add('A')
    expect(tree.root).toEqual({
      value: 'A', children: []
    })
  })

  test('add - 2', () => {
    const tree = new Tree()
    tree.add('A')
    tree.add('B')
    tree.add('B', 'C')
    expect(tree.root).toEqual({
      value: 'A', children: []
    })
  })

  test('add - 3', () => {
    const tree = new Tree()
    tree.add('A')
    tree.add('B', 'A')
    expect(tree.root).toEqual({
      value: 'A',
      children: [
        { value: 'B', children: [] }
      ]
    })
  })

  test('add - 4', () => {
    const tree = new Tree()
    tree.add('A')
    tree.add('B', 'A')
    tree.add('C', 'A')
    expect(tree.root).toEqual({
      value: 'A',
      children: [
        { value: 'B', children: [] },
        { value: 'C', children: [] }
      ]
    })
  })
})
