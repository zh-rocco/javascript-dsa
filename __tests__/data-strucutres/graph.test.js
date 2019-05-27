import Graph from '../../data-structures/graph'

describe('Graph', () => {
  test('new', () => {
    const graph = new Graph()
    expect(graph.nodes).toEqual([])
  })

  test('addNode', () => {
    const graph = new Graph()
    graph.addNode(1)
    graph.addNode(2)
    expect(graph.nodes).toEqual([
      { value: 1, lines: [] },
      { value: 2, lines: [] }
    ])
  })

  test('find', () => {
    const graph = new Graph()
    graph.addNode(1)
    expect(graph.find(1)).toEqual({ value: 1, lines: [] })
    expect(graph.find(2)).toEqual(undefined)
  })

  test('addLine', () => {
    const graph = new Graph()
    graph.addNode(1)
    graph.addNode(2)
    graph.addLine(1, 2)
    expect(graph.nodes).toEqual([
      { value: 1,
        lines: [{ value: 2, lines: [] }]
      },
      { value: 2, lines: [] }
    ])
    expect(() => {
      graph.addLine(1, 3)
    }).toThrow(new Error('Both nodes need exist.'))
  })
})
