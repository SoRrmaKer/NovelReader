<template>
  <div class="navigator">
    <div class="logo">
      <i class="iconfont icon-fanqiexiaoshuo_fanqiexiaoshuo"></i>
      <h3>番茄小说网</h3>
    </div>
    <el-menu :default-active="path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <template v-for="(item, index) in nav_menu_data">
        <el-menu-item :index="item.path" :key="index">
          {{ item.title }}
        </el-menu-item>
      </template>
    </el-menu>
    <div class="user">
      <el-avatar :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
      ></el-avatar>
      <span>User</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexBanner",
  data() {
    return {
      path:"",
      nav_menu_data: [
        {title:"首页", path:"/MyIndex"},
        {title:"书库", path:"/BookStore"},
        {title:"书架", path:"/BookShelf"},
      ],
      activeIndex:'1',
    }
  },
  methods: {
    onRouteChanged() {
      let that = this;
      that.path = that.$route.path;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    this.onRouteChanged();
  },
  watch: {
    $route: 'onRouteChanged'
  },
};
</script>

<style scoped>
.navigator {
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: #fff;
  z-index: 2;
}

.navigator .logo {
  display: flex;
  align-items: center;
  color: #303133;
  margin-left: 20%;
}

.logo i {
  color: #ff5f00;
  font-size: 36px;
  margin-right: 8px;
}

.navigator .el-menu-demo {
  margin-left: 24%;
}

.user {
  display: flex;
  align-items: center;
  width: 150px;
  margin-left: 15%;
}

.user span {
  margin-left: 15px;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #ff5f00 !important;
  color: #303133;
}
</style>