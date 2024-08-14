<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import MyLogin from './components/MyLogin'
// import SignUp from './components/SignUp'

export default {
  name: "App",
  // components:{
  //     MyLogin,
  //     SignUp
  // }
  mounted() {
    localStorage.setItem(
      "stars",
      JSON.stringify([
        {
          id: "01",
          name: "十日终焉",
          img: require("./assets/img/01.jpg"),
        },
        {
          id: "02",
          name: "我不是戏神",
          img: require("./assets/img/02.jpg"),
        },
        {
          id: "03",
          name: "我在精神病院学斩神",
          type: "都市高武",
          img: require("./assets/img/03.jpg"),
        },
        {
          id: "04",
          name: "天渊",
          img: require("./assets/img/04.jpg"),
        },
        {
          id: "05",
          name: "小村美色",
          img: require("./assets/img/05.jpg"),
        },
      ])
    ); //转换成json字符串序列
  },
};
</script>

<style>
</style>
