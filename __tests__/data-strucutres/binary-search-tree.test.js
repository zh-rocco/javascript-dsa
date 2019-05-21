import BinarySearchTree from '../../lib/data-structures/binary-search-tree'

describe('BinarySearchTree', () => {
  test('new', () => {
    const binarySearchTree = new BinarySearchTree()
    expect(binarySearchTree.root).toEqual(null)
  })

  test('contains', () => {
    const binarySearchTree = new BinarySearchTree()

    expect(binarySearchTree.contains(4)).toEqual(false)

    binarySearchTree.add(4)
    binarySearchTree.add(2)
    binarySearchTree.add(6)
    expect(binarySearchTree.contains(4)).toEqual(true)
    expect(binarySearchTree.contains(2)).toEqual(true)
  })

  test('add', () => {
    const binarySearchTree = new BinarySearchTree()

    binarySearchTree.add(4)
    expect(binarySearchTree.root).toEqual({
      value: 4,
      left: null,
      right: null
    })

    binarySearchTree.add(2)
    expect(binarySearchTree.root).toEqual({
      value: 4,
      left: { value: 2, left: null, right: null },
      right: null
    })

    binarySearchTree.add(6)
    expect(binarySearchTree.root).toEqual({
      value: 4,
      left: { value: 2, left: null, right: null },
      right: { value: 6, left: null, right: null }
    })
  })
})
