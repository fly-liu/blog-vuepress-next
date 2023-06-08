#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd .vuepress/dist

git init -b master
git config user.name "fly-liu"
git config user.email "1099983219@qq.com"
git add .
git commit -m "deploy blog"
git push git@github.com:fly-liu/fly-liu.github.io.git master
cd -