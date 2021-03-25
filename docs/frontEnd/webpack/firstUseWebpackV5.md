---
title: webpack5初体验（踩坑）
date: 2021-01-22
sidebar: "auto"
categories:
  - 大前端
tags:
  - webpack
publish: true
---

### Support for the experimental syntax 'jsx' isn't currently

原因是因为.babelrc 文件中 preset 忘记配置@babel/preset-react

### options[0] misses the property 'patterns'. Should be: [non-empty string | object { from, to?, context?, globOptions?, filter?, toType?, force?, info?, transform?, transformPath?, noErrorOnMissing? }, ...] (should not have fewer than 1 item)

原因是 copy-webpack-plugin 版本更新了，要加一个 pattern

```javascript
new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, "../static"),
      to: "static",
      globOptions: {
        ignore: [".*"],
      },
    },
  ],
});
```

### unable to locate '/Users/gannonsun/MyCodeLife/React/webpack_react/webpack_react_v1/static/\*_/_' glob

原因是因为 static 里没有文件，随便新建一个图标就可以了

