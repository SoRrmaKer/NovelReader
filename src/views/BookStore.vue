<template>
  <div class="container">
    <IndexBanner></IndexBanner>
    <div class="body">
      <div class="bodycontent">
        <div class="selector">
          <h4>分类选择</h4>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <el-divider></el-divider>
        <ul class="novel-list" style="overflow: auto">
          <li v-for="item in listData" :key="item.id">
            <div class="itemimg">
              <img :src="`${item.img}`" alt="" />
            </div>
            <div class="itemdetail">
              <div class="novelname">{{ item.name }}</div>
              <div class="noveltype">{{ item.type }}</div>
            </div>
          </li>
        </ul>
      </div>
      <IndexFooter></IndexFooter>
    </div>
  </div>
</template>

<script>
import IndexBanner from "@/components/IndexBanner.vue";
import IndexFooter from "@/components/IndexFooter.vue"

export default {
  name: "BookStore",
  data() {
    return {
      options: [
        { value: "01", label: "悬疑脑洞" },
        { value: "02", label: "都市高武" },
        { value: "03", label: "玄幻言情" },
        { value: "04", label: "传统玄幻" },
        { value: "05", label: "科幻末世" },
        { value: "06", label: "宫斗宅斗" },
        { value: "07", label: "情感小说" },
        { value: "08", label: "豪门总裁" },
      ],
      value: "",
      listData: [
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
        {
          id: "10",
          name: "我以狐仙镇百鬼",
          type: "传统玄幻",
          img: require("../assets/img/10.jpg"),
        },
        
      ],
    };
  },
  components: {
    IndexBanner,
    IndexFooter
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
}

.body {
  width: 100%;
  height: 100%;
  flex: 1;
}

.bodycontent {
  margin-top: 10vh;
  /* height: 3000px; */
  /* background-color: aqua; */
}

.selector {
  margin-top: 12vh;
  margin-left: 20%;
}

.el-select {
  margin-top: 20px;
  border-color: #ff5500 !important;
}

.el-select-dropdown__item.selected {
  color: #ff5500 !important;
}

.el-divider--horizontal {
  width: 60% !important;
  margin: 20px auto 20px auto !important;
}

.novel-list {
  width: 60%;
  height: 60vh;
  margin: 0 auto;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}

.novel-list li {
  display: flex;
  width: 30%;
  list-style: none;
  margin-bottom: 20px;
  margin: 0 0 20px 25px;
  cursor: pointer;
}

.novel-list li:hover {
  transition: all .3s;
  background-color: rgba(0,0,0,0.08);
}

.itemimg {
  margin: 10px;
  width: 40%;
  height: 90%;
}

.itemimg img {
  width: 90%;
  height: 90%;
}

.itemdetail {
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}

.novelname {
  font-weight: 600;
}

.noveltype {
  margin-top: 10px;
  font-weight: 300;
  font-size: 14px;
}
</style>