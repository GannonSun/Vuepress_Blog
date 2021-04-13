---
title: 为什么Vue中的data是一个函数
date: 2021-04-10
sidebar: "auto"
categories:
  - 大前端
tags:
  - vue
publish: true
---

# 为什么Vue中的data是一个函数

我们通常会把高复用的代码提取出来写成一个组件，那么也就意味着组件是用来复用的。为了防止组件的data被复用污染，所以才将其定义为函数。

如果data为对象，就会发现下面的情况：

```javascript
function VueComponent() {};
// 我们先将data挂载到VueComponent的原型中
VueComponent.prototype.data = { name: "a" };

// 在创建两个实例
let a = new VueComponent();
let b = new VueComponent();

// 改变b组件中data的name值
b.data.name = "b";

console.log(a.data); // { name: "b" }
console.log(b.data); // { name: "b" }
```

你会发现虽然你只改变了b实例，但是却污染到了a实例。因为他们的data对象是指向同一个内存地址。



为了避免以上情况，我们将data改为函数再试一下：

```javascript
function VueComponent() {};
// 我们先将data挂载到VueComponent的原型中
VueComponent.prototype.data = { name: "a" };

// 在创建两个实例
let a = new VueComponent();
let b = new VueComponent();

// 改变b组件中data的name值
b.data().name = "b";

console.log(a.data()); // { name: "a" }
console.log(b.data()); // { name: "b" }
```

