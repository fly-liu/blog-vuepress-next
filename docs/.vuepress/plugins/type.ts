import { PageFrontmatter } from '@vuepress/shared'
export interface Ilist {
  path: string,
  title: string,
  frontmatter: PageFrontmatter,
  [key: string]: any
}