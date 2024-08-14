<template>
  <div class="container">
    <IndexBanner></IndexBanner>
    <div class="body">
      <div class="bookshelf">
        <div
          v-for="item in bookcards"
          :key="item.id"
          class="bookcard"
          @click="ToNovelRead"
        >
          <div class="itemimg2">
            <img :src="`${item.img}`" alt="" />
          </div>
          <div class="itemdetail">
            <div class="novelname">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script>
import IndexBanner from "@/components/IndexBanner.vue";
import IndexFooter from "@/components/IndexFooter.vue";

export default {
  name: "BookShelf",
  components: {
    IndexBanner,
    IndexFooter,
  },
  data() {
    var val = localStorage.getItem("stars"); //获取存储的元素
    var stars = JSON.parse(val); //解析出json对象

    // var val = localStorage.getItem("stars"); //获取存储的元素
    // var stars = JSON.parse(val); //解析出json对象
    // stars.append({

    // })
    /* eslint-disable */
    console.log(stars);
    debugger;
    var bks = stars.map((book) => {
      return {
        id: book.id,
        name: book.name,
        img: book.img,
      };
    });
    console.log(bks);
    return { bookcards: bks };
    // return {
    //     // bookcards: [
    //     // {
    //     //   id: "01",
    //     //   name: "十日终焉",
    //     //   img: require("../assets/img/01.jpg"),
    //     // },
    //     // {
    //     //   id: "02",
    //     //   name: "我不是戏神",
    //     //   img: require("../assets/img/02.jpg"),
    //     // },
    //     // {
    //     //   id: "03",
    //     //   name: "我在精神病院学斩神",
    //     //   type: "都市高武",
    //     //   img: require("../assets/img/03.jpg"),
    //     // },
    //     // {
    //     //   id: "04",
    //     //   name: "天渊",
    //     //   img: require("../assets/img/04.jpg"),
    //     // },
    //     // {
    //     //   id: "05",
    //     //   name: "小村美色",
    //     //   img: require("../assets/img/05.jpg"),
    //     // },
    //     // ]
    // }
  },
  methods: {
    ToNovelRead() {
      this.$router.push("NovelRead");
    },
  },
  mounted() {},
};
</script>

<style scoped>
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
  overflow: auto;
}

.bookshelf {
  margin-top: 12vh;
  width: 80%;
  margin: 12vh auto 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
}

.bookcard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 15vw;
  height: 30vh;
  cursor: pointer;
  border-radius: 10px;
}

.bookcard:hover {
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.08);
}

.itemimg2 img{
  /* width: 100%;
  height: 100%; */
  /* width: 10vw; */
  height: 25vh;
}

.novelname {
  margin-top: 10px;
  font-size: 18px;
}
</style>