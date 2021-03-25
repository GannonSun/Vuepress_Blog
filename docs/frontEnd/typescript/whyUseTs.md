---
title: 为什么我要使用TypeScript
date: 2021-02-22
sidebar: "auto"
categories:
  - 大前端
tags:
  - typescript
publish: true
---

# 为什么我要使用TypeScript

很多人都说想学ts，为什么呢，因为他们觉得这是主流，是趋势；那么他为什么会是主流会是趋势呢？这就要从js的一些缺点说起了。

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5351997032b4b0b903dc3e221d8f166~tplv-k3u1fbpfcp-watermark.image?imageslim)

（这是我从掘金上看到一张图，如有侵权请告知）

JavaScript是一门动态弱类型的语言，那么何为动态弱类型？



### 强类型语言和弱类型语言

强类型语言：程序运行时，变量类型不允许任何的隐式类型转换（类型安全）

弱类型语言：程序运行时，变量类型允许任意的隐式类型转换（类型不安全）

```javascript
// 强类型语言 java python等
100 - "50" // 报语法错误

// 弱类型语言 JavaScript
100 - "50" // 不报错
```



### 静态类型语言和动态类型语言

静态类型语言： 程序开发时，变量的类型声明后，不允许在修改（编译阶段检查类型）

动态类型语言：程序开发时，变量的类型声明后，可以随时发生变化（运行阶段检查类型）

```javascript
// 静态类型语言 Java
int a = 100;
a = "100"; // 报语法错误

// 动态类型语言 JavaScript
let a = 100;
a = "100"; // typeof(a) 输出 string
```



JavaScript既是动态类型又是弱类型，这使得JavaScript程序在运行期间**很容易发生类型错误**、**隐藏潜在错误**、以及**错误不被识别为错误导致程序运行不准确**。

