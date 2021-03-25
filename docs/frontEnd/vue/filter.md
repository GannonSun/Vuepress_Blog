---
title: Vue2 过滤器语法糖
date: 2021-02-22
sidebar: "auto"
categories:
  - 大前端
tags:
  - vue
publish: true
---

# [Vue 区域使用filter过滤器](https://www.cnblogs.com/leslie1943/p/13359573.html)

Vue中过滤器(filter)的功能高度提取,便于使用，前端小伙伴们使用的频率很高.但大多数都是在模板区域来使用。

- 如果要在脚本区域, 也就是来使用已经定义好过滤器功能，该如何去做呢？
- 难道需要在utils/下写一个filter.js的文件来同步过滤器的功能吗？这样的话重复代码有点多啊。
- 以下就是如何在区域使用过滤器的脚本。
- 此处省略去定义filter和在main.js中的引用

```vue
  // 在 methods , 生命周期函数中 mounted / created 中使用

  // filterName: 过滤器名称 params: 待处理的参数

  this.$root.$options.filters.filterName(params)

  // demo: 返回不带秒的日期格式

  let temp = this.$root.$options.filters.dateSimple('2019-03-20 23:12:12')

  // temp: 2019-03-20 23:12
```

