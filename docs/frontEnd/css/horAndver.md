---
title: 怎么让一个div水平垂直居中
date: 2021-02-19
sidebar: "auto"
categories:
  - 大前端
tags:
  - css
publish: true
---

# div水平垂直居中方法

### 1、flex+margin

```css
div.parent {
  display: flex;
}
div.child {
  margin: auto;
}
```

### 2、父元素flex

```css
div.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 3、定宽高（定位+margin）

```css
div.parent {
  position: relative;
}
div.child {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -250px;
  width: 500px;
  height: 500px;
}
```

### 4、定宽高（定位+transform）

```css
div.parent {
  position: relative;
}
div.child {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 500px;
  transform: translate3d(-50%, -50%, 0);
}
```

### 4、table布局(child中文字居中)

```css
div.parent {
  display: table;
}
div.child {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```

