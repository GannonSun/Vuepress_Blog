---
title: 2021.6.15面经
date: 2021-06-16
sidebar: "auto"
categories:
  - 大前端
tags:
  - interview
keys:
  - '8ed5bc33cc7c7fa74cae1f764ce83071'
publish: true
---

# 中宏立达

### 1、React如何区分函数组件和类组件

答：可以使用**instanceof**或者**Component.prototype.isReactComponent**

```jsx
// 函数组件
export default function FunctionComonent() {
    if(FunctionComonent.prototype.isReactComponent){ // undefined
        console.log('FunctionComonent是类组件')
    }else{
        console.log('FunctionComonent函数式组件')
    }

    return <div>这是函数组件</div>
}

// 类组件
import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super();
        if(ClassComponent.prototype.isReactComponent){ // {}
            console.log('ClassComponent 是类组件')
        }else{
            console.log('ClassComponent函数式组件')
        }
    }
    render() { return (<div>这是一个Class组件</div>) }
}
  
// 引用
import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './compareFunctionComponentAndClassComponent/ClassComponent.jsx';
import FunctionComponent from './compareFunctionComponentAndClassComponent/FunctionComponent';

const clas = new ClassComponent();
console.log(`ClassComponent is Class  ${clas instanceof React.Component}`); // true

const func = new FunctionComponent();
console.log(`FunctionComponent is Class  ${func instanceof React.Component}`); // false

ReactDOM.render(
  <React.StrictMode>
    <ClassComponent />
    <FunctionComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
```



### 2、对super的理解

super是用于子类继承父类的this对象，因为子类没有自己的this对象，只能通过super继承父类的this对象。

```jsx
// 不写constructor，可以在render中正常使用this.props，这是react自带的
class A extent React.Component {
  render() {
    return (
    	<div>
      	{this.props.message}
      </div>
    )
  }
}

// 写了constructor，但是不写super
class A extent React.Component {
  constructor(props) {
    // super();
    console.log(this); // 直接报错，因为没有写super继承this对象
  }
}

// 写了constructor，但是没在super中传参props
class A extent React.Component {
  constructor(props) {
    super();
    console.log(this.props); // undefined
  }
}

// 写了constructor，super传参props
class A extent React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // {message: 'hello world'}
  }
}
```



### 3、react如何限制父组件传值给子组件的传值数据类型

答：高阶组件？propstype？存疑



### 4、ES Decorator

修饰器（Decorator）是一个函数，用来修改类的行为。这是ES7的一个[提案](https://github.com/wycats/javascript-decorators)，目前Babel转码器已经支持。

修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。

```jsx
function testable(target) {
  target.isTestable = true;
}

@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable) // true
```

上面代码中，`@testable`就是一个修饰器。它修改了`MyTestableClass`这个类的行为，为它加上了静态属性`isTestable`。

基本上，修饰器的行为就是下面这样。

```jsx
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```



### 5、setState

为什么有时连续两次`setState`只有一次生效？

```jsx
componentDidMount() {
  this.setState({ index: this.state.index + 1 }, () => {
    console.log(this.state.index);
  })
  this.setState({ index: this.state.index + 1 }, () => {
    console.log(this.state.index);
  })
}

// 1
// 1
```

```jsx
componentDidMount() {
  this.setState((preState) => ({ index: preState.index + 1 }), () => {
    console.log(this.state.index);
  })
  this.setState(preState => ({ index: preState.index + 1 }), () => {
    console.log(this.state.index);
  })
}

// 2
// 2
```

- 1.直接传递对象的`setstate`会被合并成一次
- 2.使用函数传递`state`不会被合并



### 6、dangerouslySetInnerHTML有什么危险

答：可能会导致跨站脚本攻击（XSS攻击）



### 7、React路由权限、重定向

答：

##### 第一种方法：高阶组件

在路由表中配置需要校验的路由，在高阶组件中对token和配置权限的路由进行校验

##### 第二种：权限组件

```jsx
<Switch>
  <Route exact path="/a" component={A}/>
  <Route exact path="/b" component={B}/>
  <Route path="/admin" component={Permission}/>  //需要权限访问的路由全部放置此组件里处理，permission组件
  <Route component={A}/> 
</Switch>
```

在permission组件中进行权限判断后做跳转

