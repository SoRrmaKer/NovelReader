<template>
    <div class="container">
        <div class="fullscreen">
            <video src="https://lf3-static.bytednsdoc.com/obj/eden-cn/gfeeh7pldnupqps/novel/welcome.mp4" autoplay loop muted></video>
        </div>
        <MyBanner></MyBanner>
        <div class="LogSign">
            <div class="LogHeader">
                <router-link class="swapitem" active-class="active" to="/LogSign/MyLogin">登录</router-link>
                <router-link class="swapitem" active-class="active" to="/LogSign/SignUp">注册</router-link>
            </div>
            <!-- <div class="LogBody">
                <el-input class="inputitem" maxlength="15" v-model="account" placeholder="请输入账号"></el-input>
                <el-input class="inputitem" maxlength="18" v-model="password" show-password placeholder="请输入密码"></el-input>
            </div>
            <div class="LogFooter">
                <router-view></router-view>
            </div> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import MyBanner from '@/components/MyBanner'

export default {
    name:'LogSign',
    data() {
        return{
            account:'',
            password:''
        }
    },
    components: {
        MyBanner
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
}

.fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
}

.LogSign {
    position: absolute;
    margin-top: 15%;
    margin-left: 60%;
    width: 420px;
    height: 420px;
    border-radius: 20px;
    background-color: #fff;
    z-index: 2;
}

.LogHeader {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;
    /* background-color: pink; */
}

.LogHeader .swapitem {
    text-decoration: none;
    color: #a5a5a5;
    font-size: 18px;
}

.LogHeader .swapitem.active {
    transition: .5s;
    color: #000000;
}

.LogBody {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
}

.LogBody .inputitem {
    width: 80%;
    margin: 16px 0;
    caret-color: #ff5f00;
}

.LogBody input {
    outline: none;
    border: none;
    height: 50px;
    border-radius: 12px;
}

.LogBody input:hover {
    transition: 0.3s;
    background-color: #eeeeee;
}

.LogFooter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
}
</style>