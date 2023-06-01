# blog-vuepress-next
静态博客网站，使用 Vuepress 2.x 构建工具生成，主要内容为学习笔记，在使用一些工具、框架或者感兴趣的东西都会记录下来。

## 安装依赖
```sh
npm install
```

## 说明
由于目前`VuePress`为`beta`版本，建议安装最新版本的依赖，否则可能在 build 时失败，但是最新版依赖的`node`为16.x；  

本项目依赖的`node`版本为 14.x，因此防止安装报错，`npm`包使用的是固定版本号，如果需要安装最新版本的包，将`package.json`中 devDependencies 里依赖包版本号修改为`next`  

或者在安装依赖时指定版本
```sh
npm install -D vuepress@next @vuepress/plugin-back-to-top@next @vuepress/plugin-external-link-icon@next @vuepress/plugin-medium-zoom@next @vuepress/plugin-pwa@next @vuepress/plugin-pwa-popup@next @vuepress/plugin-search@next vuepress-plugin-comment2@next vuepress-plugin-sitemap2@next
```

## 启动
```sh
npm run docs:dev
```

## 生成静态资源
```sh
npm run docs:build
```

## 项目地址
`https://github.com/fly-liu/blog-vuepress-next`

## 项目部署
先生成静态资源，然后进入资源目录，将构建好的项目发布到 github 仓库

### 进入生成的文件夹
```sh
cd .vuepress/dist
```

### git初始化和提交
```sh
git init -b master

git add .

git commit -m "提交"
```  

### 推送
```sh
# 推送到 github pages 项目
git push -f https://github.com/fly-liu/fly-liu.github.io.git master
```

=============================================================================

# 版本更新
## 2.2.1 20230217
* 使用 vupress2.x beta 版本构建
* 使用 Vue3.x + Typescript 语法开发
* 优化页面布局

## 2.1.1 20200707
* 更新知识点笔记

## 2.1.0 20190803
* 更新vuepress到 1.x 版本
* 更新UI 主页、列表页、Tag页、关于我
* 更新 Node Js 笔记
* 增加 Linux 模块笔记
* 增加 Cesium 笔记

## 1.1.1 20180919
* 增加主页UI
* 确定各页面模块
* 优化Tag页