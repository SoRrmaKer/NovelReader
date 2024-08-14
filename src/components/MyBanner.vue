<template>
    <div class="banner">
        <div class="logo">
            <i class="iconfont icon-fanqiexiaoshuo_fanqiexiaoshuo"></i>
            <h3>番茄小说网</h3>
        </div>
        <a href="">首页</a>
    </div>
</template>

<script>
export default {
    name:'MyBanner'
}
</script>

<style scoped>
.banner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 12%;
    z-index: 2;
}

.logo {
    display: flex;
    align-items: center;
    color: #f7f7f7;
    margin-left: 20%;
}

.logo i {
    color: #f7f7f7;
    font-size: 36px;
    margin-right: 8px;
}

.banner a {
    text-decoration: none;
    color: #f7f7f7;
    margin-left: 40%;
}

.banner a:hover {
    transition: .3s;
    color: #ff5f00;
}
</style>