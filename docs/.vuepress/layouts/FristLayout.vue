<script setup lang="ts">
import { withBase } from '@vuepress/client'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import BgroundBox from './components/BgroundBox.vue'

import { 
  ref,
  onMounted,
  onUnmounted
} from 'vue'
// import BigImg from './components/BigImg.vue';

// const showImg = ref(false)
// const imgSrc = ref('')

const worksList = ref([
  {
    images: [
      {
        src: '/imgs/Hd347065ad4a2401ebab0e14a2962659dE.jpg',
        alt: '消防巡检1'
      },
      // {
      //   src: '/imgs/H2a0345cfa303429fac83eb76cbe403ab8.jpg',
      //   alt: '消防巡检2'
      // },
      {
        src: '/imgs/Ha406f731286e44cb8e7186d01ce2d6b8w.jpg',
        alt: '消防巡检3'
      },
    ],
    header: '消防巡检平台',
    desc: '该平台主要分为首页、资产、维护、事件管理等模块。首页为数据可视化大屏引入了三维模型、三维地图，反应真实的应用场景，结合了人脸识别、实时视频流、智慧传感设备，可实时推送信息，做到远程检测和控制；发生严重异常时，比如烟雾、火灾报警会实时发出警报，可视化大屏上模型会显示声光特效，实体设备做应急反应。资产主要为设备管理，支持数据的增删改查，导入导出等功能，维护主要包括巡检设备的维修、维护等管理，事件管理是对报警、推送、处理、反馈流程的管理操作。',
    text: '项目使用前后端分离开发，单页面应用，前端采用Vue框架、Element-ui框架；以及Vue Route、Vuex、Axios等工具插件。三维地图基于Cesium.js 库开发, 结合 MapBox 实现自定义底图。'
  },{
    images: [
      {
        src: '/imgs/H0d9405ae821e422598ce90a0416cf224W.jpg',
        alt: '富照护运营平台'
      }
    ],
    header: '富照护运营平台',
    desc: '富照护系统是一款社区服务的产品，对需要照看护理的老人，配合物联网智能设备进行健康、环境的管理，对患有慢性疾病人群的健康信息检测管理，该平台在富照护系统中主要用于运营管理人员和设备等，以及数据报警、统计等功能，人员分为多种角色以及人员和人员组；设备管理主要分为健康设备和安全设备，对设备进行增删改和人员和设备关系绑定等操作；数据统计主要用于统计异常事件、量测测试等，配合地图显示设备位置和热力图分布和查看设备信息。',
    text: '项目使用前后端分离开发，单页面应用，采用Vue框架、Element-ui框架；以及Vue Route、Vuex、Axios等工具插件。'
  },{
    images: [
      {
        src: '/imgs/H0ff6dbe275a34367a0be8da675720f0c0.jpg',
        alt: '富照护慢病管理系统'
      }
    ],
    header: '富照护慢病管理系统',
    desc: '富照护系统是一款社区服务的产品，对需要照看护理的老人，配合物联网智能设备进行健康、环境的管理，对患有慢性疾病人群的健康信息检测管理，该平台在富照护系统中主要用于医生端，医生可添加关注的人员，观察关注人员的健康信息和可视化数据。',
    text: '项目使用前后端分离开发，单页面应用，前端基于Vue.js、Cesium.js 等框架库开发。'
  },{
    images: [
      {
        src: '/imgs/Hdda4e40e357643ae800f3fcafcdea539h.jpg',
        alt: 'FiiHealthcare'
      },{
        src: '/imgs/Hbab7c4f1fee44123a8bf0e5250d4de23j.jpg',
        alt: 'FiiHealthcare'
      },{
        src: '/imgs/He8e0f25a84004b19b1ecae8db09698ecL.jpg',
        alt: 'FiiHealthcare'
      },{
        src: '/imgs/He82e14e582264a7abc1e723840eafa31T.jpg',
        alt: 'FiiHealthcare'
      },{
        src: '/imgs/H976f30ee1a394851ac2413fac2b95f428.jpg',
        alt: 'FiiHealthcare'
      },{
        src: '/imgs/H3dd88f5c570d4439a13c32027245190cS.jpg',
        alt: 'FiiHealthcare'
      },
    ],
    header: 'FiiHealthcare 小程序',
    desc: '富照护系统是一款社区服务的产品，对需要照看护理的老人，配合物联网智能设备进行健康、环境的管理，对患有慢性疾病人群的健康信息检测管理，这个是客户端小程序，用户录入完个人信息和人脸之后，可通过人脸识别或小程序开始测量，可查看历史测量数据和可视化图表，添加关注等功能，根据不同的角色有不同的操作权限，管理员或志愿者可添加人员。',
    text: '项目使用微信小程序原生框架开发，引入qrcode.js,echarts.js等工具库。'
  },{
    images: [],
    header: '华振融小程序、H5',
    desc: '华振融是一款金融融资、贷款的产品。',
    text: '小程序端使用微信小程序原生框架开发，HTML5页面使用Vue框架，UI使用Vant框架。'
  }
])

// function toggleView(e) {
//   showImg.value = true
//   // 获取当前图片地址
//   imgSrc.value = e.currentTarget.src
// }
</script>

<template>
  <ParentLayout>
    <template #page>
      <section class="home-box scrollbar">
        <div class="home-slide slide-1">
          <BgroundBox></BgroundBox>

          <div class="main">
            <h1>Hello World</h1>
            <p>就从这句开始吧</p>
          </div>
          
          <div class="button-list">
            <img
              class="box-shadow"
              :src="withBase('/imgs/zAo2nK.png')"
              alt="个人图标"
            />
            <button class="box-shadow" @click="$router.push('/about/')">About</button>
            <button class="box-shadow" @click="$router.push('/list/')">List</button>
          </div>
        </div>

        <div class="home-slide slide-2">
          <div class="left">
            <p class="slide-header">
              <img
              :src="withBase('/imgs/zAocX6.png')"
                alt="icon2"
              />介绍
            </p>
            <p class="slide-text">
              这是我的个人网站，
              通过笔记的形式用来更新学习和工作中遇到的问题和有意思的项目，
              之前使用 VuePress1.x 开发过一个版本<a href="https://github.com/fly-liu/blog-project/" target="_blank">blog-project</a>，
              这算是一次版本更新。
              VuePress 是一个以 Markdown 为中心的静态网站生成器。
              本项目中使用 VuePress 默认主题，
              参照官方文档，该配置的基本上都配置过，
              引入了一些相关插件，
              开通 Giscus，引入了 github 评论
              首页为自定义页面，感兴趣可以访问 github 下载自行浏览，
              VuePress2.x 使用的 Vue3 + Typescript 语法进行开发。
            </p>
            <p class="slide-text">记录是学习的重要过程。如果不小心被各位看到了我的笔记并且从中有所收获，我将感到特别荣幸。</p>
            <p class="slide-text">VuePress2.x 目前仍处于 beta 阶段，因此还不够稳定，可能在运行时会失败，要时常更新或者固定 package.json 中依赖的版本。</p>
          </div>
          <div class="right">
            <img
              class="box-shadow border-radius13"
              :src="withBase('/imgs/zAoHjP.jpg')"
              alt="个人照片"
            />
          </div>
        </div>

        <div class="home-slide slide-3">
          <p class="slide-header">
            <img
              :src="withBase('/imgs/zAohAe.png')"
              alt="icon2"
            />个人亮点
          </p>
          <div class="slide-flex">
            <div class="blog-flex-centered img-fixed box-shadow border-radius13">
              <h3 class="blog-item">热爱</h3>
              <div class="blog-item-content">
                <p>热爱</p>
              </div>
            </div>
            <div class="blog-flex-centered img-fixed box-shadow border-radius13">
              <img
                class="blog-item"
                :src="withBase('/imgs/zAT9cq.png')"
                alt="个人照片1"
              />
              <div class="blog-item-content">
                <p>喜欢跑步</p>
              </div>
            </div>
            <div class="blog-flex-centered img-fixed box-shadow border-radius13">
              <h3 class="blog-item">有责任感</h3>
              <div class="blog-item-content">
                <p>有责任感</p>
              </div>
            </div>
            <div class="blog-flex-centered img-fixed box-shadow border-radius13">
              <img
                class="blog-item"
                :src="withBase('/imgs/zATp3n.png')"
                alt="个人照片2"
              />
              <div class="blog-item-content">
                <p>喜欢旅游</p>
              </div>
            </div>
            <div class="blog-flex-centered img-fixed box-shadow border-radius13">
              <h3 class="blog-item">认真</h3>
              <div class="blog-item-content">
                <p>认真工作</p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- <div class="home-slide slide-4">
          <p class="slide-header">
            <img
              :src="withBase('/imgs/zAoT1I.png')"
              alt="icon2"
            />参与的项目
          </p>
          <div class="slide-wrapper" v-for="(works,index) in worksList" :key="index">
            <div class="slide-flex">
              <img
                v-for="(imageObj,key) in works.images"
                class="img-item box-shadow"
                :key="key"
                :src="withBase(imageObj.src)"
                :alt="imageObj.alt"
                referrerpolicy="no-referrer"
              />
              </div>
            <h3 class="slide-title">{{works.header}}</h3>
            <p
              class="slide-text"
            >项目说明：{{works.desc}}</p>
            <p class="slide-text">使用技术：{{works.text}}</p>
          </div>
        </div> -->

        <!-- <div class="home-slide slide-5">
          <p class="slide-header">
            <img
              :src="withBase('/imgs/zAoT1I.png')"
              alt="icon2"
            />历史记录
          </p>
          <p class="slide-text">做过UI，写过代码</p>
          <p class="slide-text">闲时设计的几张图。</p>

          <div class="slide-flex">
            <img
              class="img-item box-shadow border-radius13"
              :src="withBase('/imgs/zAoqnf.png')"
              alt="img"
            />
            <img
              class="img-item box-shadow border-radius13"
              :src="withBase('/imgs/zAoLB8.png')"
              alt="img"
            />
            <img
              class="img-item box-shadow border-radius13"
              :src="withBase('/imgs/zAoOHS.png')"
              alt="img"
            />
            <img
              class="img-item box-shadow border-radius13"
              :src="withBase('/imgs/zAovNQ.png')"
              alt="img"
            />
          </div>
        </div> -->

        <div class="home-slide footer">
          <div class="footer-left">
            <div class="content-item">
              <div class="item-icon-box">
                <span class="item-icon1"></span>
              </div>
              <p>1099983219@qq.com</p>
            </div>
            <div class="content-item">
              <div class="item-icon-box">
                <span class="item-icon2"></span>
              </div>
              <p>XXX</p>
            </div>
          </div>
          <div class="footer-right">
            <img
              class="qr-img"
              :src="withBase('/imgs/Hf7ab919c1fab4fc79d8d214c984c2be6W.jpg')"
              alt="qrcode"
            />
          </div>
        </div>
        
        <!-- 放大图片 -->
        <!-- <big-img v-if="showImg" @clickit="showImg = false" :imgSrc="imgSrc"></big-img> -->
      </section>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@import "../styles/reset.scss";
.home-box {
  height: 100%;

  .slide-header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $theme-font-size3;

    img {
      margin-right: 1.25rem;
      height: 2.125rem; // 34px
    }
  }

  .slide-title {
    margin: .625rem auto;

    &::before {
      content: '\25B2';
      display: inline-block;
      margin-right: .625rem;
      color: #8492a6;
      transform: scale(.8);
    }
  }

  .slide-text {
    font-size: $theme-font-size1;
    color: #8492a6;
  }

  .home-slide:not(:first-child):not(:last-child) {
    margin: auto;
    padding: 2vw 0;
    width: 70%;
  }

  .slide-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2.5rem 0 1.25rem;

    .img-item {
      margin: .96vw .96vw .96vw 0;
      max-width: 90vw;
      max-height: 160px;
    }

    .img-fixed {
      position: relative;
      margin: .9vw;
      width: 12vw;
      height: 12vw;
      overflow: hidden;
      box-sizing: border-box;
      z-index: 1;
      cursor: pointer;

      &:hover {
        .blog-item {
          opacity: 0;
        }

        .blog-item-content {
          opacity: 1;
          transform: scale(1,1);
        }
      }

      img {
        padding-top: 50%;
        width: 100%;
      }

      .blog-item-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        background: #dadada;
        transform: scale(1,0);
        transition: opacity .35s,transform .35s;
        opacity: 0;

        p {
          margin: .625rem;
        }
      }
    }
  }

  .slide-1 {
    position: relative;
    height: 100vh;
    
    .main {
      position: absolute;
      top: 22%;
      left: 0;
      right: 0;
      margin: auto;
      width: 52%;
      text-align: center;
      color: var(--frist-text-color);

      h1 {
        margin: 0;
        font-size: 8.75rem;
        color: transparent;
        // background: linear-gradient(45deg,#ff0000 0%,#ffb600 11%,#fff600 22%,#a5ff00 33%,#00a9ff 44%,#0400ff 55%,#8a00fc 66%,#ff00e9 77%,#ff0059 88%,#ff0000 100%);
        background: linear-gradient(
          45deg,
        #ff0000 0%,#ff0000 11%,
        #ffb600 11%,#ffb600 22%,
        #fff600 22%,#fff600 33%,
        #a5ff00 33%,#a5ff00 44%,
        #00a9ff 44%,#00a9ff 55%,
        #0400ff 55%,#0400ff 66%,
        #8a00fc 66%,#8a00fc 77%,
        #ff00e9 77%,#ff00e9 88%,
        #ff0000 88%,#ff0000 100%);
        // background:radial-gradient(
        //   #ff0000 0%,#ff0000 11%,
        //   #ffb600 11%,#ffb600 22%,
        //   #fff600 22%,#fff600 33%,
        //   #a5ff00 33%,#a5ff00 44%,
        //   #00a9ff 44%,#00a9ff 55%,
        //   #0400ff 55%,#0400ff 66%,
        //   #8a00fc 66%,#8a00fc 77%,
        //   #ff00e9 77%,#ff00e9 88%,
        //   #ff0000 88%,#ff0000 100%);
        background-clip: text;
        -webkit-background-clip: text;
      }

      p {
        font-size: $theme-font-size2;
        font-weight: 600;
      }
    }
    
    .button-list {
      position: absolute;
      bottom: 4vh;
      margin-left: 2.5rem;
      display: flex;

      img,
      button {
        margin: 0 .625rem;
        border-radius: .625rem /* 10/16 */;
        width: 3.875rem;
        height: 3.875rem;
      }

      button {
        border: 4px solid var(--frist-text-color);
        font-size: .875rem;
        font-weight: 600;
        background: var(--white);

        &:hover {
          border-color: $theme-color;
          color: $theme-color;
        }
      }
    }
  }

  .slide-2 {
    display: flex;

    .left {
      padding: 0 0 6.25rem 0;
      width: 32%;
    }

    .right {
      flex: 1;
      text-align: right;
      img {
        width: 75%;
      }
    }
  }

  .slide-3 {
    position: relative;

    .slide-icon {
      position: absolute;
      top: 15%;
      right: 10%;
      width: 5vw;
      height: 5vw;
      background: url(../public/imgs/Hce60910694354ba2af75002b9a1460e6r.jpg) no-repeat center center;
      background-size: contain;
    }
  }

  .slide-5 {
    .slide-flex {
      display: flex;
      width: 100%;
      justify-content: center;

      .img-item {
        margin: 10px;
        max-height: 350px;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--grey14);

    .footer-left {
      .content-item {
        display: flex;
        align-items: center;
        margin: 10px 0;

        .item-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 2.8rem;
          height: 2.8rem;
          background-color: var(--black);
        }

        .item-icon1 {
          display: inline-block;
          width: 100%;
          height: 100%;
          background: url(../public/imgs/zAojAg.png) no-repeat center center;
          filter: var(--filter-invert-value);
        }

        .item-icon2 {
          display: inline-block;
          width: 100%;
          height: 100%;
          background: url(../public/imgs/zAoxhj.png) no-repeat center center;
          filter: var(--filter-invert-value);
        }

        span {
          width: 2.5rem;
          height: 2.5rem;
        }

        p {
          margin-left: 1rem;
          color: var(--black);
          font-size: $theme-font-size1;
        }
      }
    }
    
    .footer-right {
      .qr-img {
        width: 116px;
        height: 116px;
      }
    }
  }

  .my-button-disabled {
    opacity: 0.2;
  }
}

html.dark {
  .home-box {
    .slide-1 {
      .main {
        h1 {
          color: var(--frist-text-color);
          background: transparent;
        }
      }
    }

    .slide-flex {
      .img-fixed {
        color: #eee;
        background: var(--c-text);
      }
    }
  }
}

/**
 * 屏幕适配
 */
@media screen and (max-width: 1366px) {
  .home-box {
    .slide-header {
      font-size: 1.5rem;

      img {
        margin-right: 0.5rem;
        height: 1.75rem;
      }
    }

    .slide-flex {
      .img-fixed {
        width: 27.5vw;
        height: 27.5vw;
      }
      .img-item {
        max-height: 7.5rem;
      }
    }

    .home-slide:not(:first-child):not(:last-child) {
      width: 90%;
    }

    .slide-text {
      font-size: $theme-font-size1;
      width: 100%;
    }

    .slide-5 {
      .slide-flex {
        justify-content: left;
        flex-wrap: wrap;
        .img-item {
          max-height: 35vw;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  /*768*/
  .home-box {
    .slide-header {
      font-size: 24px;
      margin-bottom: 0;
    }

    .slide-text {
      font-size: 14px;
      width: 100%;
    }

    .slide-flex {
      .img-fixed {
        width: 27.5vw;
        height: 27.5vw;
      }
    }

    .slide-1 {
      .main {
        h1 {
          font-size: 46px;
        }
      }
      .button-list {
        right: 0;
      }
    }
    .slide-2 {
      .left {
        width: 100%;
        padding: 0 0 10px 0;
      }
      .right {
        display: none;
      }
    }
    
    .slide-5 {
      .slide-flex {
        justify-content: left;
        flex-wrap: wrap;
        .img-item {
          max-height: 68vw;
        }
      }
    }

    .footer {
      .footer-left {
        margin-left: 12%;
        .content-item {
          .item-icon1,
          .item-icon2 {
            width: 24px;
            height: 24px;
            background-size: 80%;
          }
          p {
            margin: 0 10px;
          }
        }
      }
      .footer-right {
        text-align: center;
        vertical-align: middle;
        .qr-img {
          width: 50%;
          height: auto;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
