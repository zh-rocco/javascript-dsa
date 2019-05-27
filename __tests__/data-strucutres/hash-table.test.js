import HashTable from '../../data-structures/hash-table'

describe('HashTable', () => {
  test('new', () => {
    const hashTable = new HashTable()
    expect(hashTable).toHaveProperty('memory')
    expect(hashTable.memory).toEqual([])
  })

  test('set', () => {
    const hashTable = new HashTable()
    hashTable.set('hash', 0)
    const address = hashTable.hashKey('hash')
    expect(hashTable.memory[address]).toEqual(0)
  })

  test('set', () => {
    const hashTable = new HashTable()
    hashTable.set('hash', 0)
    expect(hashTable.get('hash')).toEqual(0)
  })

  test('remove', () => {
    const hashTable = new HashTable()
    hashTable.set('hash', 0)
    expect(hashTable.get('hash')).toEqual(0)
    hashTable.remove('hash')
    expect(hashTable.get('hash')).toEqual(undefined)
  })
})
