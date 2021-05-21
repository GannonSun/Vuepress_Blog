---
title: var name = 42; name + 1 = ???
date: 2021-05-08
sidebar: "auto"
categories:
  - 大前端
tags:
  - javascript
publish: true
---

# var name = 42; name + 1 = ???

我相信很多人看到这个标题的时候，都会和我第一次见到这个问题一样，心想：这不是废话吗肯定是43啊。

于是我打开了控制台，尝试了一下，震惊我一整年，答案居然是"421"！

<img :src="$withBase('/varName/varname.jpg')" alt=""> 

那么这究竟是为什么呢？

原因是当你使用var定义一个变量时，这个变量会自动挂载到window对象上，也就是说当你var name = 42的时候，其实是window.name = 42。

但是因为window对象中存在name属性，且name属性设置返回的是一个字符串 <https://www.runoob.com/jsref/prop-win-name.html>

所以这时候你的42就被转换为"42"了，那么理所当然name + 1也就等于"421"了。