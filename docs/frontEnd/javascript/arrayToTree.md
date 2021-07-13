---
title: 扁平数据结构转Tree
date: 2021-7-13
sidebar: "auto"
categories:
  - 大前端
tags:
  - javascript
publish: true
---

# 扁平数据结构转Tree

输入：

```javascript
let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]
```

输出：

```javascript
[
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]
```



### 方法一：递归

```javascript
const digui = (data = [], pId = 0) => {
    let res = [];
    data && data.map(item => {
        if (item.pid === pId) {
            res.push({ ...item, children: digui(arr, item.id) })
        }
    })
    return res;
}
```



### 方法二：不递归，多遍历

```javascript
function getTree1(arr) {
  arr.forEach((item) => {
    // 获取parentId = 当前id
    const children = arr.filter((child) => child.pid == item.id);
    item.children = children;
  });
  //   取出最顶层 parentId == 0
  return arr.filter((item) => item.pid == 0);
}
```



### 方法三：不递归，少遍历

```javascript
function arrayToTree(items) {
    const result = [];   // 存放结果集
    const itemMap = {};  // 
    for (const item of items) {
        const { id, pid } = item;

        itemMap[id] = {
            ...item,
            children: itemMap[id] ?.children ?? []
        }

        const treeItem = itemMap[id];

        if (pid === 0) {
            result.push(treeItem);
        } else {
            if (!itemMap[pid]) {
                itemMap[pid] = {
                    children: [],
                }
            }
            itemMap[pid].children.push(treeItem)
        }

    }
    return result;
}
```

