(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{519:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"朴朴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#朴朴"}},[t._v("#")]),t._v(" 朴朴")]),t._v(" "),s("h3",{attrs:{id:"_1、webpack4和webpack5的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、webpack4和webpack5的区别"}},[t._v("#")]),t._v(" 1、webpack4和webpack5的区别")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("webpack4")]),t._v(" "),s("th",[t._v("webpack5")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("devServer启动")]),t._v(" "),s("td",[t._v("webpack-dev-server")]),t._v(" "),s("td",[t._v("webpack serve")])]),t._v(" "),s("tr",[s("td",[t._v("资源模块处理(png、jpg、gif)")]),t._v(" "),s("td",[t._v("url-loader、file-loader")]),t._v(" "),s("td",[t._v("type: 'asset'")])]),t._v(" "),s("tr",[s("td",[t._v("文件缓存")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[t._v("新增 cache: { type: 'filesystem' }")])]),t._v(" "),s("tr",[s("td",[t._v("Tree Shaking")]),t._v(" "),s("td",[t._v("---")]),t._v(" "),s("td",[t._v("代码优化的更简洁了")])]),t._v(" "),s("tr",[s("td",[t._v("模块联邦")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[t._v("可以将应用A的某个模块单独剥离导出，在应用B中用CDN直接共享")])])])]),t._v(" "),s("h3",{attrs:{id:"_2、webpack打包优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、webpack打包优化"}},[t._v("#")]),t._v(" 2、webpack打包优化")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("大小优化")]),t._v(" "),s("th",[t._v("1、CommonsChunk单独打包第三方库，缺点是每次打包都需要重新打包"),s("br"),t._v("2、DLL & DLLReference，在webpack.dll.config.js中设置需要单独打包的第三方库，利用webpack.DllPlugin设置导出的manifest.json路径，在webpack.config.js中利用webpack.DllReferencePlugin设置引入的manifest.json路径，这种的优点就在于如果第三方库没有发生变化，那只会重新打包业务代码")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("速度优化")]),t._v(" "),s("td",[t._v("1、优化loader，缩小文件匹配范围(include，exclude)；优化模块查找路径(reslove，指定node_modules，当import第三方库的时候，默认从node_module查找)；alias别名路径(缺点：影响到tree-shaking去除代码)；2、happypack让webpack对loader的执行过程从单一进程扩展为多进程模式；3、Tree shaking去除多余的代码")])])])]),t._v(" "),s("h3",{attrs:{id:"_3、tree-shaking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、tree-shaking"}},[t._v("#")]),t._v(" 3、Tree-shaking")]),t._v(" "),s("p",[t._v("将一些import进来但是却未使用的代码去除，只能适用于es6的import引入，不适用于commonjs的require，因为es6的模块引入是静态引入")]),t._v(" "),s("p",[t._v("在webpack5中，对commonjs增加了一些支持，允许消除未使用的commonjs的导出。")]),t._v(" "),s("h3",{attrs:{id:"_4、antd3升级到4这个过程中我们做了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、antd3升级到4这个过程中我们做了什么"}},[t._v("#")]),t._v(" 4、antd3升级到4这个过程中我们做了什么")]),t._v(" "),s("p",[t._v("图标改为按需引入。动态加载icon的时候使用React.createElement。")]),t._v(" "),s("p",[t._v("移除Form.create，hooks使用Form.useForm，class使用React.createRef")]),t._v(" "),s("p",[t._v('Form onSubmit替换成onFinish，getFieldDecorator改为name=""')]),t._v(" "),s("h3",{attrs:{id:"_5、setstate原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、setstate原理"}},[t._v("#")]),t._v(" 5、setState原理")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// num = 3")]),t._v("\n")])])]),s("p",[t._v("num是先变成2在变成3还是直接变成3")]),t._v(" "),s("p",[t._v("// 直接变成3")]),t._v(" "),s("p",[t._v("setState会存到一个队列中，然后在合并之后进行清空渲染组件")]),t._v(" "),s("h3",{attrs:{id:"_6、react写组件的时候如何避免多次渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、react写组件的时候如何避免多次渲染"}},[t._v("#")]),t._v(" 6、React写组件的时候如何避免多次渲染")]),t._v(" "),s("p",[t._v("class组件：shouldComponentUpdate、React.PureComponent(浅比较)")]),t._v(" "),s("p",[t._v("函数组件：React.memo")]),t._v(" "),s("p",[t._v("hooks：useMemo")]),t._v(" "),s("h3",{attrs:{id:"_7、如何处理表格多数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、如何处理表格多数据"}},[t._v("#")]),t._v(" 7、如何处理表格多数据")]),t._v(" "),s("p",[t._v("虚拟列表react-window，只渲染可视区域中的Dom元素，区域外的元素直接销毁")]),t._v(" "),s("h3",{attrs:{id:"_8、hooks-state的数据放在哪里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、hooks-state的数据放在哪里"}},[t._v("#")]),t._v(" 8、hooks state的数据放在哪里？")]),t._v(" "),s("p",[t._v("放在一个数组中，然后每个state对应一个索引")]),t._v(" "),s("h3",{attrs:{id:"_9、eventloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、eventloop"}},[t._v("#")]),t._v(" 9、EventLoop")]),t._v(" "),s("p",[t._v("JavaScript是单线程的，宏任务——》微任务——〉渲染")]),t._v(" "),s("p",[t._v("Promise构造函数是同步的，回调函数是异步的")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("宏任务")]),t._v(" "),s("th",[t._v("微任务")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("setTimeout")]),t._v(" "),s("td",[t._v("requestAnimationFrame(有争议)")])]),t._v(" "),s("tr",[s("td",[t._v("setInterval")]),t._v(" "),s("td",[t._v("MutationObserver(浏览器环境)")])]),t._v(" "),s("tr",[s("td",[t._v("MessageChannel")]),t._v(" "),s("td",[t._v("Promise.[then/catch/finnally]")])]),t._v(" "),s("tr",[s("td",[t._v("IO，事件队列")]),t._v(" "),s("td",[t._v("Process.nextTick(Node环境)")])]),t._v(" "),s("tr",[s("td",[t._v("setImmediate(Node环境)")]),t._v(" "),s("td",[t._v("queueMicrotask")])]),t._v(" "),s("tr",[s("td",[t._v("script(整体代码块)")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"_10、浏览器的整个页面渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、浏览器的整个页面渲染过程"}},[t._v("#")]),t._v(" 10、浏览器的整个页面渲染过程")]),t._v(" "),s("ul",[s("li",[t._v("键盘或触屏输入URL并回车确认")]),t._v(" "),s("li",[t._v("URL解析/DNS查询")]),t._v(" "),s("li",[t._v("网络连接发起HTTP请求")]),t._v(" "),s("li",[t._v("HTTP报文传输过程")]),t._v(" "),s("li",[t._v("服务器接收数据")]),t._v(" "),s("li",[t._v("服务器响应请求")]),t._v(" "),s("li",[t._v("服务器返回数据")]),t._v(" "),s("li",[t._v("客户端接收数据")]),t._v(" "),s("li",[t._v("浏览器加载/渲染页面")]),t._v(" "),s("li",[t._v("打印绘制输出")])]),t._v(" "),s("h3",{attrs:{id:"_11、call、apply、bind三者区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11、call、apply、bind三者区别"}},[t._v("#")]),t._v(" 11、call、apply、bind三者区别")]),t._v(" "),s("p",[t._v("共同点：三者都是改变this指向，重定义this对象")]),t._v(" "),s("p",[t._v("不同点：call和apply是立即执行，bind返回的是一个函数，需要自己执行；call和bind传参用的是逗号隔开直接传入，apply传参用的是数组")]),t._v(" "),s("h3",{attrs:{id:"_12、const、let、var三者区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12、const、let、var三者区别"}},[t._v("#")]),t._v(" 12、const、let、var三者区别")]),t._v(" "),s("p",[t._v("let和var声明的是变量，let声明的变量不存在变量提升，var声明的变量存在变量提升")]),t._v(" "),s("p",[t._v("const声明的是常量，后续不能对该常量重新赋值")]),t._v(" "),s("h3",{attrs:{id:"_13、用const定义的对象可以修改里面的属性值吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13、用const定义的对象可以修改里面的属性值吗"}},[t._v("#")]),t._v(" 13、用const定义的对象可以修改里面的属性值吗？")]),t._v(" "),s("p",[t._v("可以用obj.propetyName修改，但是不能直接obj = {}")]),t._v(" "),s("h3",{attrs:{id:"_14、webpack打包的整个过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14、webpack打包的整个过程"}},[t._v("#")]),t._v(" 14、webpack打包的整个过程")]),t._v(" "),s("p",[t._v("初始化：启动构建，读取和合并配置参数，加载plugin，生成Complier对象，有且只有一个；")]),t._v(" "),s("p",[t._v("编译：找到entry入口文件，从入口出发，遍历每个模块，调用模块对应的Loader去翻译，然后找到模块依赖的模块，依此递归进行编译处理；")]),t._v(" "),s("p",[t._v("输出：将编译好的模块生成chunk，再将chunk生成文件，输出到文件系统中。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("常见Loader")]),t._v(" "),s("th",[t._v("file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)"),s("br"),t._v("url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)"),s("br"),t._v("image-loader：加载并且压缩图片文件"),s("br"),t._v("babel-loader：把 ES6 转换成 ES5"),s("br"),t._v("awesome-typescript-loader：将 TypeScript 转换成 JavaScript"),s("br"),t._v("sass-loader：将SCSS/SASS代码转换成CSS"),s("br"),t._v("css-loader：加载 CSS，支持模块化、压缩、文件导入等特性"),s("br"),t._v("style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS"),s("br"),t._v("eslint-loader：通过 ESLint 检查 JavaScript 代码"),s("br")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("常见Plugin")]),t._v(" "),s("td",[t._v("html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)"),s("br"),t._v("clean-webpack-plugin：目录清理"),s("br"),t._v("webpack-bundle-analyzer：可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("Loader和Plugin区别")]),t._v(" "),s("td",[t._v("Loader本质是一个函数，对接收到的内容进行转换，返回转换结果。loader是个翻译官，对其他类型的资源进行转译的预处理工作。"),s("br"),t._v("Plugin就是一个插件，可以扩展webpack的功能。")])])])]),t._v(" "),s("h3",{attrs:{id:"_15、webpack-plugin自己写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15、webpack-plugin自己写"}},[t._v("#")]),t._v(" 15、webpack plugin自己写")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scripts/plugin/auto-css-modules.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" extname "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CSS_EXTNAMES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".scss"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".sass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".less"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImportDeclaration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// specifiers 是指 import styles from './index.less'中的styles，是个数组")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// source 是 from 后面的")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" specifiers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("specifiers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CSS_EXTNAMES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("?css_modules")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在路径末尾加上 css_modules 用于 webpack 匹配该文件，如 import Test from './test.less'; 变成 import Test from './test.less?css_modules';")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_16、react新特性、fiber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16、react新特性、fiber"}},[t._v("#")]),t._v(" 16、React新特性、fiber")]),t._v(" "),s("p",[t._v("shouldComponentUpdate生命周期、插槽（Portals组件），应用场景：弹窗、处理异步数据或组件（suspense）、React.memo() 是高阶函数能将函数组件转换成类似于React.PureComponent组件、react采用了新的ref方式，使用React.createRef()、hooks。")]),t._v(" "),s("p",[t._v("fiber：因为JavaScript单线程的特点，当React决定要加载或者更新组件树时，会做很多事，比如调用各个组件的生命周期函数，计算和比对Virtual DOM，最后更新DOM树，这整个过程是同步进行的，也就是说只要一个加载或者更新过程开始，那React就以不破楼兰终不还的气概，一鼓作气运行到底，中途绝不停歇。如果要更新好几个组件，在这更新过程中如果进行键盘的输入，界面上不会有任何反应，造成界面卡顿。")]),t._v(" "),s("p",[t._v("而fiber就是把每个任务分成很多小片，每个小片执行的时间很短。在每个小任务中间会给你执行其他任务的机会。React Fiber把更新过程碎片化，执行过程如下面的图所示，每执行完一段更新过程，就把控制权交还给React负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。")]),t._v(" "),s("p",[t._v("维护每一个分片的数据结构，就是Fiber。")]),t._v(" "),s("h3",{attrs:{id:"_17、diff算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17、diff算法"}},[t._v("#")]),t._v(" 17、diff算法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("场景")]),t._v(" "),s("th",[t._v("解决方案")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("不同类型的元素")]),t._v(" "),s("td",[t._v("直接卸载原有的的组件树并重新渲染")])]),t._v(" "),s("tr",[s("td",[t._v("相同类型的元素")]),t._v(" "),s("td",[t._v("保留DOM节点，仅对比及更新有改变的属性")])]),t._v(" "),s("tr",[s("td",[t._v("移动节点")]),t._v(" "),s("td",[t._v("遍历新节点列表，拿每个节点在旧节点列表中进行key查找，找到对应位置后，与上一个节点的位置进行对比，如果大于上一个节点的位置，则说明该节点不需要移动。使用key来查找")])])])]),t._v(" "),s("h3",{attrs:{id:"_18、有没有自己封装过什么组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18、有没有自己封装过什么组件"}},[t._v("#")]),t._v(" 18、有没有自己封装过什么组件")]),t._v(" "),s("h3",{attrs:{id:"_19、组件间的通讯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19、组件间的通讯"}},[t._v("#")]),t._v(" 19、组件间的通讯")]),t._v(" "),s("p",[t._v("父子组件 props、context、redux、dva、events发送事件")]),t._v(" "),s("h3",{attrs:{id:"_20、展示自己的优点、做的好的项目没问到的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20、展示自己的优点、做的好的项目没问到的"}},[t._v("#")]),t._v(" 20、展示自己的优点、做的好的项目没问到的")])])}),[],!1,null,null,null);a.default=n.exports}}]);