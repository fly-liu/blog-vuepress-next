#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd .vuepress/dist

git init -b main
git add .
git commit -m 'deploy blog'
git push -f https://github.com/fly-liu/blog-vuepress-next.git main
cd -