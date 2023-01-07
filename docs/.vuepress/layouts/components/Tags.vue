<script setup lang="ts">
import { getTagCount } from '../utils/utils.js'

const props = defineProps({
  allList: {
    type: Array,
    default() {
      return []
    }
  }
})

const emit = defineEmits(['changeTag'])

const allTags: any = props.allList.reduce((previous: any, current: any) => {
  return previous.concat(current.frontmatter.tag)
}, [])

const tagList: any = getTagCount(allTags)

</script>

<template>
  <section class="el-box">
    <div class="tag-box clearfix">
      <div class="item-tag fl" style="background-color: #46bd87;" @click="emit('changeTag', '')">全部</div>
      <div class="item-tag fl" 
        v-for="(tagObj,index) in tagList" 
        :key="index" 
        :style="'background-color:'+tagObj.color" 
        @click="emit('changeTag', tagObj.tagName)"
      >{{`${tagObj.tagName}&nbsp;&nbsp;(${tagObj.count})`}}</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.el-box {
  margin: auto 25%;
  padding: 1rem 0;

  .tag-box {
    .item-tag {
      margin: 0 1.5rem .625rem 0;
      padding: .5rem .875rem;
      border: none;
      border-radius: .4rem;
      color: #f8f8f8;
      line-height: 1;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 768px) {
  .el-box {
    margin: auto 4%;
    .tag-box {
      margin: 10px 10px 0;
      .item-tag {
        margin: 0 6px 6px 0;
      }
    }
  }
}
</style>
