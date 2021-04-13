---
title: js Date对象取三个月后的日期
date: 2021-3-25
sidebar: "auto"
categories:
  - 大前端
tags:
  - javascript
publish: true
---

# 使用Date对象取到三个月后的日期

```javascript
var newDate = new Date(); // 2021.3.31
newDate.setMonth((newDate.getMonth()) + 3);
let endDate1 = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
console.log(newDate); // "2021-07-01T07:53:38.697Z"
console.log(endDate1) //  2021-7-1
```

这里注意，因为getMonth方法返回的值是从零开始的，所以要在最后加上1，但是不能在setMonth里直接加一，否则会出现6.31这样的问题

