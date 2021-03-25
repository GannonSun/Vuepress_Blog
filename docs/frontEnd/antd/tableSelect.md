---
title: antd 解决Table翻页之后选中的rowKeys清空情况
date: 2021-3-25
sidebar: "auto"
categories:
  - 大前端
tags:
  - antd
publish: true
---

# antd 解决Table翻译之后选中的rowKeys清空情况

#### 遇到的问题

因为项目中表格翻页都需要重新请求接口，翻页之后表格的dataSource被删除替换了，导致先前选中的selectRowKeys被清空。翻到下一页在翻回来之后选中的数据就没了，永远只能返回当前页选中的数据。

```javascript
// 翻页前
const onChange = (selectRowKeys, selectRows) => {
  console.log(selectRowKeys); // such as [1, 2]
}

// 翻页后
const onChange = (selectRowKeys, selectRows) => {
  console.log(selectRowKeys); // such as [11, 12], 先前的[1, 2]未返回
}

// rowSelection设置
const rowSelection = {
  type: 'checkbox',
  selectedRowKeys,
  onChange: this.onChange
};
```



#### 希望看到的结果

翻页后onChange事件能将先前选中的key一并返回，保留其他页选中的数据



#### 解决方案

在antd4.4.0之后Table组件新增了一项api：

preserveSelectedRowKeys 当数据被删除时仍保留key



代码如下：

```javascript
// 翻页前
const onChange = (selectRowKeys, selectRows) => {
  console.log(selectRowKeys); // such as [1, 2]
}

// 翻页后
const onChange = (selectRowKeys, selectRows) => {
  console.log(selectRowKeys); // such as [1, 2, 11, 12]
}

// rowSelection设置
const rowSelection = {
  type: 'checkbox',
  preserveSelectedRowKeys: true,
  selectedRowKeys,
  onChange: this.onChange
};
```



