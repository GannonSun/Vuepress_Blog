---
title: 文件名为何包含hash？
date: 2021-01-22
sidebar: 'auto'
categories:
 - 大前端
tags:
 - webpack
publish: true
---

## fullhash VS chunkhash VS contenthash

webpack打包的输出文件名经常加上hash，这是为什么呢？每次部署前端资源的时候，如果文件名没有发现变化，会导致浏览器以为它没有更新，导致存在缓存，客户使用的还是之前的老版本，经常需要清除浏览器缓存，对用户使用不太友好。

文件名加上hash可以保证我们发布新版本的时候客户端可以及时获取最新版本，因为代码中获取到的文件名不存在，会使得重新去搜索并重新加载。

#### fullhash

后续测试一下再更新