<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { usePageData } from '@vuepress/client'
import { filterPageList } from './utils/utils.js'

import Navbar from "@vuepress/theme-default/lib/client/components/Navbar.vue";
import Tags from "./components/Tags.vue";

const query = useRoute().query
const curTag = ref(query?.tag || '')
const router = useRouter();
const page: any = usePageData()
const allList: any = filterPageList(page.value.lists, ['/serve/']) || []

const lists = computed(() => {
  return curTag.value ? allList.filter((item) => {
      return item.frontmatter?.tag?.includes(curTag.value)
    }) : allList
})

const handleChangeTag = (tag) =>{
  curTag.value = tag
}
</script>

<template>
  <Navbar />
  <div class="press-list common-box">
    <Tags :allList="allList" @changeTag="handleChangeTag"/>
    <div class="item-warrper">
      <div class="item-data" v-for="item in lists" :key="item.path">
        <div v-if="item.frontmatter.description" class="art">
          {{item.frontmatter.description}}……<a :href="item.path" class="look">阅读原文</a>
        </div>
        <div class="item-title-warpper">
          <h2 v-text="item.title" @click="router.push({ path: item.path })"></h2>
          <p @click="router.push({ path: item.path })">阅读全文 >></p>
        </div>

        <div class="more-box" v-if="item.excerpt" v-html="item.excerpt"></div>

        <div class="sign-box" :class="item.excerpt ? 'excerpt' : ''">
          <div class="item-time"><span class="time-icon"></span>{{item.frontmatter.date ? item.frontmatter.date : '- - -'}}</div>
          <div class="item-time">文章大概的字数:{{item.count}}</div>
          <div class="item-time">大概需要阅读的时间:{{item.time}}</div>
          <div class="item-tag-box" v-if="item.frontmatter.tag">
            <div 
              class="item-tag" 
              v-for="tagString in item.frontmatter.tag" 
              :key="tagString">
              <span class="tag-icon"></span>
              <span class="tag-text">{{tagString}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .press-list {
    .sidebar {
      display: none;
    }
  }
</style>
<style lang="scss" scoped>
@import '../styles/common.scss';
.press-list {
  .item-data {
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      width: 2%;
      height: 4px;
      background: #fff;
    }
    &::after {
      position: absolute;
      content: '';
      right: 20px;
      bottom: -2px;
      width: 2%;
      height: 4px;
      background: #fff;
    }
  }

  .item-time {
    .time-icon {
      background: url(https://ae01.alicdn.com/kf/Hc151c568f616423aa733b740fb8ee94cu.jpg) no-repeat center;
      background-size: contain;
    }
  }

  .item-tag {
    .tag-icon {
      background: url(https://ae01.alicdn.com/kf/H80b41d67c10143a1a304c5be68f7297bu.jpg) no-repeat center;
      background-size: contain;
    }
  }
}
@media screen and (max-width: 768px) {
  .press-list {
    .item-time {
      .time-icon {
        margin-right: 10px;
        width: 16px;
        height: 16px;
      }
    }
    .item-tag {
      font-size: 14px;
      .tag-icon {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
