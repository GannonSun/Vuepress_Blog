---
title: GIS空间分析-如何判断圆与多边形是否相交
date: 2021-05-21
sidebar: "auto"
categories:
  - 大前端
tags:
  - gis
publish: true
---

# GIS空间分析-如何判断圆与多边形是否相交

### 写在前面

项目中使用到的是leaflet，需求是绘制圆之后判断与若干个多边形区域是否有交集，如果相交则把相交区域传给后端，减少后端的查询工作量，提高查询效率

<img :src="$withBase('/judgeIntersects/default.png')" alt=""> 

### 初试

最开始我先去leaflet文档中寻找是否有判断相交的方法存在，果不其然我找到了。

在Bounds类的下面有一个intersects方法，用于判断两边界是否相交。

于是我就直接写上了

```javascript
const circleBounds = circle.getBounds();
const areaBounds = area.getBounds();
console.log(areaBounds.intersects(circleBounds));
```

随便测试了一下发现打印结果正常，我就没有在意了，直接跳过写下个需求。



### 初败

不久后我又回头走流程突然发现有些地方的圆明明没有相交，却判断成的相交，这让我感到困惑。于是我发现了`getBounds()`方法返回的是一个矩形，也就是说圆和多边形都变成了矩形进行相交对比，自然多出了很多不存在的区域，如图所示

<img :src="$withBase('/judgeIntersects/duobianxing.png')" alt=""> 

<img :src="$withBase('/judgeIntersects/yuan.png')" alt=""> 

经过寻找，在这里推荐一个gis引擎库`turf`，他拥有很强大的空间分析功能，接下来我们将使用它完成我们的需求。



### 再试

首先找到我们的相交方法 [instersect](https://turfjs.fenxianglu.cn/category/transformation/intersect.html)，需要传入两个多边形Feature

其次我们要找到创建[多边形](https://turfjs.fenxianglu.cn/category/helper/polygon.html)和[圆](https://turfjs.fenxianglu.cn/category/transformation/circle.html)的方法

就有了以下代码

```javascript
const polygon = turf.polygon(latlngs);
const circle = turf.circle(center, radius, options);
console.log(turf.intersect(polygon, circle)) // return Feature|null
```

