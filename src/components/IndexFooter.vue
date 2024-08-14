<template>
  <div class="footer">
    <div class="footerone">
      <div class="footerlogo">
        <i class="iconfont icon-fanqiexiaoshuo_fanqiexiaoshuo"></i>
        <h3>番茄小说网</h3>
      </div>
      <p>© 2024 From华北电力大学</p>
    </div>
    <div class="footertwo">
      <p>广告投放:Mrdotzheng@qq.com</p>
      <p>不良信息:Mrdotzheng@qq.com</p>
      <p>意见咨询:Mrdotzheng@qq.com</p>
      <p>版权咨询:Mrdotzheng@qq.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexFooter",
};
</script>

<style>
.footer {
  display: flex;
  width: 100%;
  height: 160px;
  background-color: rgba(0, 0, 0, 0.04);
}

.footerone {
  display: flex;
  flex-direction: column;
  width: 15vw;
  margin-left: 20%;
}

.footerlogo {
  display: flex;
  align-items: center;
  color: #303133;
  padding-top: 30px;
}

.footerlogo i {
  color: #ff5f00;
  font-size: 36px;
  margin-right: 8px;
}

.footerone p {
  margin-top: 60px;
  font-size: 12px;
  font-weight: 200;
}

.footertwo {
  display: flex;
  flex-direction: column;
  padding: 45px 0 0 40px;
  /* background-color: aqua; */
  margin-left: 25%;
}

.footertwo p {
  padding: 5px;
  font-size: 12px;
  font-weight: 200;
}
</style>