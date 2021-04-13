---
title: git 常用操作及顺序
date: 2021-04-01
sidebar: "auto"
categories:
  - 大前端
tags:
  - git
publish: true
---

# git常用操作及顺序



### 1、新建GitHub仓库

<img :src="$withBase('/image-20210401112630066.png')" alt="foo"> 

我们这里假设你已经有了一个GitHub账号，先来到你的仓库界面，然后点击new来到新建仓库界面

<img :src="$withBase('/image-20210401112729900.png')" alt="foo"> 

输入你想要创建的仓库名称，这里我们填写的是Git_note；

你可以在Description处填写你对此仓库的一些介绍，选填；

你可以将你的仓库设置成公开所有人可见public或者私密仅指定人和自己可见private；

Add a README file：在新建仓库的同时生成一个README.md文件，此文件主要填写仓库描述和使用说明，内容会在仓库成功创建后展示在仓库首页下方；

Add .gitignore：在新建仓库的同时生成一个.gitignore文件，此文件的用处是用来指定某些文件和文件夹不需要添加到版本管理，比如说我们的依赖包node_module；

Choose a license：选择一个开源的证书，本人没用过，不做详细介绍，有需要的自行百度了解；

设置完成后点击Create repository按钮创建仓库

<img :src="$withBase('/image-20210401234555991.png')" alt="foo"> 

创建完成后会进入到仓库界面，这里官方已经提供了四种远程仓库关联本地代码的方法

第一种：下载GitHub官方提供的客户端，应该是某种版本管理可视化工具，这里我没有使用过，所以就不多说了；

第二种：在你本机电脑中使用终端进入你想创建项目代码的文件夹，这里指的是一个全新的空文件夹，然后依次执行以下代码

```javascript
echo "# Git_note" >> README.md // 新建README.md文件并在里面添加# Git_note内容
git init // git初始化命令, 新建.git隐藏文件夹版本库
git add README.md // 将README.md文件添加到暂存区
git commit -m "first commit" // 将暂存区中的文件, 即README.md文件提交到本地的版本库中, 并添加"first commit"的提交信息
git branch -M main // 将本地的分支重命名为main
git remote add origin https://github.com/GannonSun/Git_note.git // 将此版本库, 即此文件夹关联到远程的仓库, 也就是刚刚创建的git仓库
git push -u origin main // 将本地main分支推送到远程上, 此时远程分支上就会多出一条main分支
```

第三种：根据我的理解哈，就是你本地的那个代码文件夹里已经存在git版本库了，这时候就不需要git init的命令的，直接git remote关联远程的仓库，然后push提交；

第四种：类似仓库搬迁功能，把可能之前废弃的git仓库搬迁到此处



介绍完官方提供的方法之后，我说说我平时使用的流程：

```javascript
// 我们先在本机电脑中新建一个空的文件夹，假设我们这里在MyCode文件夹中新建一个Git_note的文件夹
cd MyCode // 进入MyCode文件夹
mkdir Git_note // 新建Git_note文件夹
cd Git_note // 进入Git_note文件夹
git clone https://github.com/GannonSun/Git_note.git // 这里的地址就是上图中黄色圈中的https地址

// 随后我们就开始我们的代码之旅吧，比如说用脚手架搭框架等等，写完代码之后
git add .
git commit "你的提交信息"
git push
```



