/**
 * Binary search trees are a fairly common form of tree for their ability to
 * efficiently access, search, insert, and delete values all while keeping them
 * in a sorted order.
 *
 * Imagine taking a sequence of numbers:
 *
 *     1  2  3  4  5  6  7
 *
 * And turning it into a tree starting from the center.
 *
 *              4
 *           /     \
 *        2           6
 *      /   \       /   \
 *     1     3     5     7
 *    -^--^--^--^--^--^--^-
 *     1  2  3  4  5  6  7
 *
 * This is how a binary tree works. Each node can have two children:
 *
 *     - Left: Less than parent node's value.
 *     - Right: Greater than parent node's value.
 *
 * > Note: In order to make this work all values must be unique in the tree.
 *
 * This makes the traversal to find a value very efficient. Say we're trying to
 * find the number 5 in our tree:
 *
 *             (4)         <--- 5 > 4, so move right.
 *           /     \
 *        2         (6)    <--- 5 < 6, so move left.
 *      /   \       /   \
 *     1     3    (5)    7 <--- We've reached 5!
 *
 * Notice how we only had to do 3 checks to reach the number 5. If we were to
 * expand this tree to 1000 items. We'd go:
 *
 *   500 -> 250 -> 125 -> 62 -> 31 -> 15 -> 7 -> 3 -> 4 -> 5
 *
 * Only 10 checks for 1000 items!
 *
 * The other important thing about binary search trees is that they are similar
 * to linked lists in the sense that you only need to update the immediately
 * surrounding items when adding or removing a value.
 */

export default class BinarySearchTree {
  constructor () {
    this.root = null
  }

  contains (value) {
    let current = this.root

    while (current) {
      if (value > current.value) {
        current = current.right
      } else if (value < current.value) {
        current = current.left
      } else {
        return true
      }
    }

    return false
  }

  add (value) {
    const node = { value, left: null, right: null }

    if (this.root === null) {
      this.root = node
      return
    }

    let current = this.root

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = node
          break
        }

        current = current.right
      } else if (value < current.value) {
        if (!current.left) {
          current.left = node
          break
        }

        current = current.left
      } else {
        break
      }
    }
  }
}
