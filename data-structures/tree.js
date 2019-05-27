/**
 * Trees are much like graphs or linked lists except they are "unidirectional".
 * All this means is that they can't have loops of references.
 *
 *        Tree:                Not a Tree:
 *
 *          A                        A
 *       ↙   ↘                   ↗  ↘
 *      B       C                B ←–––– C
 *
 * We'll start off with an extremely simple tree structure. It doesn't have any
 * special rules to it and looks something like this:
 *
 *     Tree {
 *       root: {
 *         value: 1,
 *         children: [{
 *           value: 2,
 *           children: [...]
 *         }, {
 *           value: 3,
 *           children: [...]
 *         }]
 *       }
 *     }
 */

export default class Tree {
  constructor () {
    this.root = null
  }

  traverse (callback) {
    function walk (node) {
      callback(node)
      node.children.forEach(walk)
    }

    walk(this.root)
  }

  add (value, parentValue) {
    const newNode = { value, children: [] }

    if (this.root === null) {
      this.root = newNode
      return
    }

    this.traverse((node) => {
      if (node.value === parentValue) {
        node.children.push(newNode)
      }
    })
  }
}
