<script setup lang="ts">
import Navbar from "@vuepress/theme-default/lib/client/components/Navbar.vue";
</script>

<template>
  <section class="about-box common-box">
    <Navbar />
    <div class="main-bg"></div>
    <div class="info-window">
      <p class="item-title">技能：</p>
      <p class="item-text">WEB 前端开发</p>
      <p class="item-title">语言及框架：</p>
      <p class="item-text">HTML5、Javascript、CSS3</p>
      <p class="item-text">Vue全家桶、React、Three.js、Cesium.js、小程序</p>
      <h2></h2>
      <p class="item-title">技能：</p>
      <p class="item-text">UI 设计</p>
      <p class="item-title">软件：</p>
      <p class="item-text">PhotoShop、Illustrator、Axure RP Pro</p>
      <h2></h2>
      
      <p class="item-title">邮箱：</p>
      <p class="item-text">1099983219@qq.com</p>
      <h2></h2>
      <p class="item-title">爱好：</p>
      <p class="item-text">喜欢跑步、游泳、羽毛球、养植物，一个人的时候喜欢找个咖啡店坐上一天，听听音乐研究一下代码，释放一下头脑风暴。</p>
      
      <p class="item-title">个人评价：</p>
      <p class="item-text">做自己喜欢的事，自律，对事物保持新鲜感。</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/common.scss';
.about-box {
  position: relative;
  .main-bg {
    position: absolute;
    top: 10%;
    right: 6%;
    width: 25%;
    height: 50vh;
    background: url(../public/imgs/He68f3d200579413fa5dbe13dd70ef92cR.jpg) no-repeat center;
    background-size: contain;
    
    .item-animation {
      animation: scaleFrame 3s linear infinite;
    }

    @keyframes scaleFrame {
      0% {
        transform: scale(1);
      }
      50% { 
        transform: scale(1.2);
      }
      100% { 
        transform: scale(1);
      }
    }
  }

  .info-window {
    position: relative;
    margin: 0 0 30px 18%;
    color: var(--grey3);
    width: 50%;
    .item-title {
      margin: 20px 0 0;
      font-size: 22px;
    }

    .item-text {
      margin: 0;
      color: var(--c-text);
    }
  }
}
@media screen and (max-width: 768px) {
  .about-box {
    .main-bg {
      margin: auto;
      left: 0;
      right: 0;
      width: 80%;
    }
    .info-window {
      margin: 0 auto 60px;
      width: 88%;
      background: rgba(255,255,255,.8);
    }
  }
}
</style>
