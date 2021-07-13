---
title: GIS空间分析-如何去除多个圆形的相交区域
date: 2021-06-06
sidebar: "auto"
categories:
  - 大前端
tags:
  - gis
publish: true
---

# GIS空间分析-如何去除多个圆形的相交区域

话不多少，先贴代码

```javascript
let latlngArr = [[116.983309, 33.633853], [117.13409, 33.633853], [117.23409, 33.633853], [117.483309, 33.633853], [117.63409, 33.633853]];
// 先生成点
let points = latlngArr.map(item => turf.point(item));
// 因为算集群的时候需要用到点要素集合，所以这里先生成
let pointFeatures = turf.featureCollection(points);
// 计算集群，第一个参数为点要素集合，第二个参数为判断集群中每个点成员之间的最大距离，这里设置20km，因为我们后面生成的圆半径为10km，minPoints代表一个集群最少需要几个点，默认为3，如果小于3个点会被认为是噪点或者边界点不算在内，所以这里默认给他1，保证每个点至少可以自己组成一个集群
let clustered = turf.clustersDbscan(pointFeatures, 20, { minPoints: 1 });
// 遍历集群，生成circle，随后联合，用联合生成的geojson绘制图形
turf.clusterEach(clustered, 'cluster', (cluster, clusterValue, currentIndex) => {
  let circleArr = cluster.features.map(item => turf.circle(item.geometry.coordinates, 10, {}));
  let circleFeatures = turf.featureCollection(circleArr);
  let combined = turf.combine(circleFeatures);
  let union =
      circleArr.length > 1
  ? turf.union(combined.features[0], circleArr[0])
  : combined.features[0];
  let geoJson = L.geoJSON(union, {
    style: (feature) => {
      return {
        color: 'red',
        dashArray: '10, 10'
      }
    }
  }).addTo(map);
})
```

好像代码贴出来之后就没什么好说的，注释也都写了，我大概讲一下流程吧。

1、将经纬度点数组遍历生成turf点

2、将所有点添加到点要素集合

3、计算集群，这里使用的是Dbscan算法集群

4、遍历集群生成圆，并将所有的圆数组添加到圆要素集合

5、将圆要素结合起来，主要是为了获取返回的`FeatureCollection <(MultiPoint|MultiLineString|MultiPolygon)>`

6、将他们联合起来，获取返回的Geojson，绘制
