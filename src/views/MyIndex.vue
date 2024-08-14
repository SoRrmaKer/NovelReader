<template>
  <div class="container">
    <IndexBanner></IndexBanner>
    <div class="body">
      <div class="bodycontentSurface">
        <div class="header"></div>
        <div class="bodycontent">
          <div class="content">
            <div class="recommend">
              <div class="recommendtitle">
                <i class="el-icon-star-on"></i>
                番茄巅峰榜
              </div>
              <div class="recommendtip">
                <h5>根据作品人气排行</h5>
              </div>
              <div class="recommendlist">
                <SwiperList></SwiperList>
              </div>
            </div>
            <div class="information">
              <div class="informationtitle">
                <i class="el-icon-message-solid"></i>
                最新资讯
              </div>
              <div class="informationlist">
                <div  v-for="item in information" :key="item.id" class="informationdetail">
                  <a>{{ item.detail }}</a>
                </div>
              </div>
            </div>
          </div>
          <IndexFooter></IndexFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperList from "@/components/SwiperList.vue";
import IndexBanner from "@/components/IndexBanner.vue";
import IndexFooter from "@/components/IndexFooter.vue"

export default {
  name: "MyIndex",
  data() {
    return {
      information: [
        { id: "1", detail: "第三届网络文学大赛决赛获奖作品公示" },
        { id: "2", detail: "番茄历史课：元/明历史解读" },
        { id: "3", detail: "2024年4月星火计划拟获奖作品公示" },
        { id: "4", detail: "「番茄·网络文学爱心基金」申请条件更新，对全行业作者开放" },
        { id: "5", detail: "2024年4月“乘风计划”拟获奖作品公示" },
        { id: "6", detail: "2024年4月番茄平台账号违规处罚公告" },

      ],
    };
  },
  components: {
    SwiperList,
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

.header {
  /* display: flex;
    flex-direction: column; */
  top: 0;
  left: 0;
  position: absolute;
  align-items: center;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  background-image: url(https://p6-novel.byteimg.com/origin/novel-static/1ae29ac0a71a752bab51d090b942c3c4);
  z-index: 1;
}

.body {
  width: 100%;
  height: 100%;
  flex: 1;
}

.body .bodycontentSurface {
  margin-top: 50vh;
  /* background-color: #ff5f00; */
}

.bodycontent {
  width: 100%;
  height: 100%;
  /* height: 3000px; */
}

.content {
  display: flex;
  justify-content: space-around;
}

.recommend {
  height: 90vh;
}

.recommendtitle {
  display: flex;
  align-items: center;
  padding-top: 5vh;
  font-size: 24px;
}

.recommendtitle i {
  margin-left: 20%;
  margin-right: 10px;
  font-size: 30px;
  color: #ff5f00;
}

.recommendtip {
  margin-left: 20%;
  margin-top: 10px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.information {
  margin-top: 30px;
  width: 25%;
  height: 90vh;
  /* background-color: #ff5f00; */
  display: flex;
  flex-direction: column;
}

.informationtitle {
  display: flex;
  align-items: center;
  padding-top: 5vh;
  font-size: 24px;
}

.informationtitle i {
  margin-left: 10%;
  margin-right: 10px;
  font-size: 30px;
  color: #ff5f00;
}

.informationlist {
  margin-left: 10%;
  margin-top: 50px;
  width: 60%;
  height: 70vh;
}

.informationdetail {
  font-size: 16px;
  color: #333;
  width: 300px;
  padding: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.informationdetail:hover {
  color: #ff5f00;
  transition: .5s;
  cursor: pointer;
}

</style>