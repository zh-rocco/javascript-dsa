/**
 * Contrary to the ascii art above, a graph is not a visual chart of some sort.
 *
 * Instead imagine it like this:
 *
 *     A –→ B ←–––– C → D ↔ E
 *     ↑    ↕     ↙ ↑     ↘
 *     F –→ G → H ← I ––––→ J
 *          ↓     ↘ ↑
 *          K       L
 *
 * We have a bunch of "nodes" (A, B, C, D, ...) that are connected with lines.
 *
 * These nodes are going to look like this:
 *
 *     Node {
 *       value: ...,
 *       lines: [(Node), (Node), ...]
 *     }
 *
 * The entire graph will look like this:
 *
 *     Graph {
 *       nodes: [
 *         Node {...},
 *         Node {...},
 *         ...
 *       ]
 *     }
 */

export default class Graph {
  constructor () {
    this.nodes = [] // to store references to everything
  }

  addNode (value) {
    return this.nodes.push({ value, lines: [] })
  }

  find (value) {
    return this.nodes.find(node => node.value === value)
  }

  addLine (startValue, endValue) {
    const startNode = this.find(startValue)
    const endNode = this.find(endValue)

    if (!startNode || !endNode) {
      throw new Error('Both nodes need exist.')
    }

    startNode.lines.push(endNode)
  }
}
