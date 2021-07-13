---
title: 2021.6.25面经
date: 2021-06-16
sidebar: "auto"
categories:
  - 大前端
tags:
  - interview
keys:
  - 'ec94f05fa41c14680ec73c34a8e44285'
publish: true
---

# 朴朴

### 1、webpack4和webpack5的区别

|                             | webpack4                | webpack5                                                  |
| --------------------------- | ----------------------- | --------------------------------------------------------- |
| devServer启动               | webpack-dev-server      | webpack serve                                             |
| 资源模块处理(png、jpg、gif) | url-loader、file-loader | type: 'asset'                                             |
| 文件缓存                    | 无                      | 新增 cache: { type: 'filesystem' }                        |
| Tree Shaking                | ---                     | 代码优化的更简洁了                                        |
| 模块联邦                    | 无                      | 可以将应用A的某个模块单独剥离导出，在应用B中用CDN直接共享 |

### 2、webpack打包优化

| 大小优化 | 1、CommonsChunk单独打包第三方库，缺点是每次打包都需要重新打包<br />2、DLL & DLLReference，在webpack.dll.config.js中设置需要单独打包的第三方库，利用webpack.DllPlugin设置导出的manifest.json路径，在webpack.config.js中利用webpack.DllReferencePlugin设置引入的manifest.json路径，这种的优点就在于如果第三方库没有发生变化，那只会重新打包业务代码 |
| -------- | ------------------------------------------------------------ |
| 速度优化 | 1、优化loader，缩小文件匹配范围(include，exclude)；优化模块查找路径(reslove，指定node_modules，当import第三方库的时候，默认从node_module查找)；alias别名路径(缺点：影响到tree-shaking去除代码)；2、happypack让webpack对loader的执行过程从单一进程扩展为多进程模式；3、Tree shaking去除多余的代码 |

### 3、Tree-shaking

将一些import进来但是却未使用的代码去除，只能适用于es6的import引入，不适用于commonjs的require，因为es6的模块引入是静态引入

### 4、antd3升级到4这个过程中我们做了什么

图标改为按需引入。动态加载icon的时候使用React.createElement。

移除Form.create，hooks使用Form.useForm，class使用React.createRef

Form onSubmit替换成onFinish，getFieldDecorator改为name=""

### 5、setState原理

```jsx
this.setState({
  num: 2
})
this.setState({
  num: 3
})
// num = 3
```

num是先变成2在变成3还是直接变成3

// 直接变成3

setState会存到一个队列中，然后在合并之后进行清空渲染组件

### 6、React写组件的时候如何避免多次渲染

class组件：shouldComponentUpdate、React.PureComponent(浅比较)

函数组件：React.memo

hooks：useMemo

### 7、如何处理表格多数据

虚拟列表react-window，只渲染可视区域中的Dom元素，区域外的元素直接销毁

### 8、hooks state的数据放在哪里？

放在一个数组中，然后每个state对应一个索引

### 9、EventLoop

JavaScript是单线程的，宏任务——》微任务——〉渲染

Promise构造函数是同步的，回调函数是异步的

| 宏任务                 | 微任务                        |
| ---------------------- | ----------------------------- |
| setTimeout             | requestAnimationFrame(有争议) |
| setInterval            | MutationObserver(浏览器环境)  |
| MessageChannel         | Promise.[then/catch/finnally] |
| IO，事件队列           | Process.nextTick(Node环境)    |
| setImmediate(Node环境) | queueMicrotask                |
| script(整体代码块)     |                               |



### 10、浏览器的整个页面渲染过程

+ 键盘或触屏输入URL并回车确认
+ URL解析/DNS查询
+ 网络连接发起HTTP请求
+ HTTP报文传输过程
+ 服务器接收数据
+ 服务器响应请求
+ 服务器返回数据
+ 客户端接收数据
+ 浏览器加载/渲染页面
+ 打印绘制输出

### 11、call、apply、bind三者区别

共同点：三者都是改变this指向，重定义this对象

不同点：call和apply是立即执行，bind返回的是一个函数，需要自己执行；call和bind传参用的是逗号隔开直接传入，apply传参用的是数组

### 12、const、let、var三者区别

let和var声明的是变量，let声明的变量不存在变量提升，var声明的变量存在变量提升

const声明的是常量，后续不能对该常量重新赋值

### 13、用const定义的对象可以修改里面的属性值吗？

可以用obj.propetyName修改，但是不能直接obj = {}

### 14、webpack打包的整个过程

初始化：启动构建，读取和合并配置参数，加载plugin，生成Complier对象，有且只有一个；

编译：找到entry入口文件，从入口出发，遍历每个模块，调用模块对应的Loader去翻译，然后找到模块依赖的模块，依此递归进行编译处理；

输出：将编译好的模块生成chunk，再将chunk生成文件，输出到文件系统中。

| 常见Loader         | file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)<br />url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)<br />image-loader：加载并且压缩图片文件<br />babel-loader：把 ES6 转换成 ES5<br />awesome-typescript-loader：将 TypeScript 转换成 JavaScript<br />sass-loader：将SCSS/SASS代码转换成CSS<br />css-loader：加载 CSS，支持模块化、压缩、文件导入等特性<br />style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS<br />eslint-loader：通过 ESLint 检查 JavaScript 代码<br /> |
| ------------------ | ------------------------------------------------------------ |
| 常见Plugin         | html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)<br />clean-webpack-plugin：目录清理<br />webpack-bundle-analyzer：可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)<br /> |
| Loader和Plugin区别 | Loader本质是一个函数，对接收到的内容进行转换，返回转换结果。loader是个翻译官，对其他类型的资源进行转译的预处理工作。<br />Plugin就是一个插件，可以扩展webpack的功能。 |

### 15、webpack plugin自己写

```javascript
// scripts/plugin/auto-css-modules.js
const { extname } = require("path");
const CSS_EXTNAMES = [".css", ".scss", ".sass", ".less"];
module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path) {
        // specifiers 是指 import styles from './index.less'中的styles，是个数组
        // source 是 from 后面的
        const { specifiers, source } = path.node;
        const { value } = source;
        if (specifiers.length > 0 && CSS_EXTNAMES.includes(extname(value))) {
          source.value = `${value}?css_modules`; // 在路径末尾加上 css_modules 用于 webpack 匹配该文件，如 import Test from './test.less'; 变成 import Test from './test.less?css_modules';
        }
      },
    },
  };
};
```

### 16、React新特性、fiber

shouldComponentUpdate生命周期、插槽（Portals组件），应用场景：弹窗、处理异步数据或组件（suspense）、React.memo() 是高阶函数能将函数组件转换成类似于React.PureComponent组件、react采用了新的ref方式，使用React.createRef()、hooks。



fiber：因为JavaScript单线程的特点，当React决定要加载或者更新组件树时，会做很多事，比如调用各个组件的生命周期函数，计算和比对Virtual DOM，最后更新DOM树，这整个过程是同步进行的，也就是说只要一个加载或者更新过程开始，那React就以不破楼兰终不还的气概，一鼓作气运行到底，中途绝不停歇。如果要更新好几个组件，在这更新过程中如果进行键盘的输入，界面上不会有任何反应，造成界面卡顿。

而fiber就是把每个任务分成很多小片，每个小片执行的时间很短。在每个小任务中间会给你执行其他任务的机会。React Fiber把更新过程碎片化，执行过程如下面的图所示，每执行完一段更新过程，就把控制权交还给React负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。

维护每一个分片的数据结构，就是Fiber。

### 17、diff算法

| 场景           | 解决方案                                                     |
| -------------- | ------------------------------------------------------------ |
| 不同类型的元素 | 直接卸载原有的的组件树并重新渲染                             |
| 相同类型的元素 | 保留DOM节点，仅对比及更新有改变的属性                        |
| 移动节点       | 遍历新节点列表，拿每个节点在旧节点列表中进行key查找，找到对应位置后，与上一个节点的位置进行对比，如果大于上一个节点的位置，则说明该节点不需要移动。使用key来查找 |



### 18、有没有自己封装过什么组件



### 19、组件间的通讯

父子组件 props、context、redux、dva、events发送事件

### 20、展示自己的优点、做的好的项目没问到的

