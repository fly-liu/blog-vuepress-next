import { Page } from 'vuepress'

/**
 * Tag列表格式化
 * @param arr 初始列表
 * @returns 格式化之后的列表
 */
export function getTagCount(arr: string[] = []) {
  const tagData = {};
  const tagList: object[] = [];

  arr.map(tagName => {
    tagData[tagName] ? tagData[tagName]++ : tagData[tagName] = 1;
  })

  //保存结果{el-'元素'，count-出现次数}
  for(let key in tagData) {
    const rgb: string = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},.8)`;

    tagList.push({
      tagName: key,
      count: tagData[key],
      color: rgb
    });
  }

  return tagList;
}

/**
 * 过滤列表数据
 * @param pages 所有列表
 * @param exclude 排除的列表
 * @param include 包含的列表
 * @returns 过滤后的列表
 */
export function filterPageList(pages: Page[] = [], exclude: string[] = [], include: string[] = []) {
  if(!include.length && !exclude.length) return pages;

  const pageList = pages.filter(item => {
    const includeFlag = include.length ? include.some(v => {
      return item.path.indexOf(v) !== -1
    }) : true

    const excludeFlag = exclude.length ? exclude.some(v => {
      return item.path.indexOf(v) !== -1
    }) : true
    
    if(includeFlag && !excludeFlag) return item
  })

  return pageList;
}
