# JavaScript Data Structures & Algorithms

- **Time complexity** refers to the total count of operations an algorithm will perform given a set of items.

- **Space complexity** refers to the total memory an algorithm will take up while running given a set of items.

### Time complexity

![big-o-graph](./assets/big-o-graph.png)

<center>
<a href="http://bigocheatsheet.com/">Big-O Algorithm Complexity Cheat Sheet</a>
</center>

These are some common Big-O's:

| Name         | Notation   | How you feel when they show up at your party |
| ------------ | ---------- | -------------------------------------------- |
| Constant     | O(1)       | AWESOME!!                                    |
| Logarithmic  | O(log N)   | GREAT!                                       |
| Linear       | O(N)       | OKAY.                                        |
| Linearithmic | O(N log N) | UGH...                                       |
| Polynomial   | O(N ^ 2)   | SHITTY                                       |
| Exponential  | O(2 ^ N)   | HORRIBLE                                     |
| Factorial    | O(N!)      | WTF                                          |

| Actions            | Accessing | Searching | Inserting | Deleting |
| ------------------ | --------- | --------- | --------- | -------- |
| Array              | O(1)      | O(N)      | O(N)      | O(N)     |
| Linked List        | O(N)      | O(N)      | O(1)      | O(1)     |
| Binary Search Tree | O(log N)  | O(log N)  | O(log N)  | O(log N) |

| Actions            | Accessing | Searching | Inserting | Deleting  |
| ------------------ | --------- | --------- | --------- | --------- |
| Array              | AWESOME!! | OKAY      | OKAY      | OKAY      |
| Linked List        | OKAY      | OKAY      | AWESOME!! | AWESOME!! |
| Binary Search Tree | GREAT!    | GREAT!    | GREAT!    | GREAT!    |

## Space complexity

## Reference

- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)
- [itsy-bitsy-data-structures](https://github.com/jamiebuilds/itsy-bitsy-data-structures)
- [algorithms.js](https://github.com/felipernb/algorithms.js)
- [数据结构与算法 JavaScript 描述](https://book.douban.com/subject/25945449/)
