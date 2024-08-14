<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div v-for="item in swiperitem" :key="item.id" class="swiper-item">
          <div class="itemindex">{{ item.id }}</div>
          <div class="itemdetail">
            <div class="novelname">{{ item.name }}</div>
            <div class="noveltip">{{ item.type }}</div>
          </div>
          <div class="itemimg">
            <img :src="`${item.img}`" alt="" />
          </div>
        </div>
      </div>
      <div class="swiper-slide">slider2</div>
      <div class="swiper-slide">slider3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "SwiperList",
  data() {
    return {
      swiperitem: [
      {
          id: "01",
          name: "十日终焉",
          type: "悬疑脑洞",
          img: require("../assets/img/01.jpg"),
        },
        {
          id: "02",
          name: "我不是戏神",
          type: "玄幻言情",
          img: require("../assets/img/02.jpg"),
        },
        {
          id: "03",
          name: "我在精神病院学斩神",
          type: "都市高武",
          img: require("../assets/img/03.jpg"),
        },
        {
          id: "04",
          name: "天渊",
          type: "传统玄幻",
          img: require("../assets/img/04.jpg"),
        },
        {
          id: "05",
          name: "小村美色",
          type: "情感小说",
          img: require("../assets/img/05.jpg"),
        },
        {
          id: "06",
          name: "惊鸿",
          type: "传统玄幻",
          img: require("../assets/img/06.jpg"),
        },
        {
          id: "07",
          name: "冰河末世",
          type: "科幻末世",
          img: require("../assets/img/07.jpg"),
        },{
          id: "08",
          name: "贾二虎的妖孽人生",
          type: "豪门总裁",
          img: require("../assets/img/08.jpg"),
        },{
          id: "09",
          name: "深情诱引",
          type: "情感小说",
          img: require("../assets/img/09.jpg"),
        },
      ],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        bulletActiveClass: "my-bullet-active",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style>
.swiper-container {
  position: relative;
  width: 45vw;
  height: 55vh;
  margin: 50px 0 0 20%;
  /* background-color: aqua; */
  --swiper-navigation-color: #ff5f00; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 24px; /* 设置按钮大小 */
}

.my-bullet-active {
  background: #ff5f00;
  opacity: 1;
}

.swiper-slide {
  display: grid;
  /* background-color: aqua; */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.swiper-item {
  display: flex;
  margin: 30px 40px;
}

.itemindex {
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  font-weight: 500;
  padding: 10px 5px 0 5px;
  width: 10%;
}

.itemdetail {
  width: 6vw;
  padding: 10px 2px 0 5px;
}

.noveltip {
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  margin-top: 5px;
}

.itemimg {
  margin: auto;
  width: 40%;
  height: 90%;
}

.itemimg img {
  width: 100%;
  height: 100%;
}
</style>