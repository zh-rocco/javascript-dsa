# Merge Sort

[Source Code](./index.js)

## Simulation

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif)

## Operation

归并排序使用分治法（Divide and conquer）策略，将两个已经排序的序列合并成一个序列的操作。

**分治法：**

- 分割：递归地把当前序列平均分割成两半。
- 集成：在保持元素顺序的同时将上一步得到的子序列集成到一起（归并）。

**递归法：**

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
4. 重复步骤 3 直到某一指针到达序列尾
5. 将另一序列剩下的所有元素直接复制到合并序列尾

**迭代法：**

1. 将序列每相邻两个数字进行归并操作，形成 ceil(n/2) 个序列，排序后每个序列包含两/一个元素
2. 若此时序列数不是 1 个则将上述序列再次归并，形成 ceil(n/4) 个序列，每个序列包含四/三个元素
3. 重复步骤 2，直到所有元素排序完毕，即序列数为 1
