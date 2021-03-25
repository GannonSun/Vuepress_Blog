---
title: typescript + webpack + react初体验
date: 2021-01-24
sidebar: "auto"
categories:
  - 大前端
tags:
  - typescript
publish: true
---

## Cannot find module 'object-assign'

## Cannot find module 'strip-ansi'

好家伙，我第一次用ts + webpack + react打一个框架，刚把app.js 改成 app.tsx然后npm run dev之后，就给我硬生生的报了一堆错，我还以为是react-dom升级到17.0.1的bug，后来一查，发现原来是我webpack配置中的reslove文件后缀名没加上.

```javascript
	resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
```

你说说，这一天天的，气人不！

贴上好心人的链接：https://blog.csdn.net/yunchong_zhao/article/details/104882875



## React version not specified in eslint-plugin-react settings

在eslintrc.js中指定react版本，在eslintrc.js中添加settings即可

```javascript
settings: {
    react: {
        version: "detect"
    }
}
```



## 'title' is missing in props validation  react/prop-types

```typescript
import PropTypes from 'prop-types';

const Hello: FC<{ title: string }> = ({title}) => {
  return <h1>{title}</h1>;
};

Hello.propTypes = {
  title: PropTypes.string,
};
```



