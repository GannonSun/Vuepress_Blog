---
title: BFC概念及其作用
date: 2021-02-18
sidebar: "auto"
categories:
  - 大前端
tags:
  - css
publish: true
---

# BFC概念及其作用

### 概念

BFC（Block fomatting context）就是块级格式上下文，是页面盒模型布局中的一种CSS渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。

### 创建方式

1、html根元素

2、float浮动

3、绝对定位

4、overflow不为visible

5、display为表格布局或者弹性布局

### 主要作用

1、清除浮动

2、防止同一BFC容器中的相邻元素间的外边距重叠问题

3、左侧float，右侧设置overflow可以实现两栏自适用布局

### 特性

1、内部box会在垂直方向，一个接一个的放置

2、box垂直方向的距离由margin决定，在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠

3、在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘（border-left）（对于从右到左的格式来说，则触碰到右边缘）

4、形成了BFC的区域不会与float box重叠

5、计算BFC高度时，浮动元素也参与计算