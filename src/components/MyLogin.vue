<template>
    <div>
        <div class="LogBody">
            <el-input class="inputitem" maxlength="15" v-model="account" placeholder="请输入账号"></el-input>
            <el-input class="inputitem" maxlength="18" v-model="password" show-password placeholder="请输入密码"></el-input>       
        </div>
        <div class="LogFooter">
            <button class="LogBtn" @click="toIndex">登录</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'MyLogin',
    data() {
        return{
            account:'',
            password:''
        }
    },
    methods: {
        toIndex() {
            // this.$router.push({
            //     name:'ToIndex'
            // })
            alert("账号或密码错误！")
        }
    }
}
</script>

<style scoped>
.LogBtn {
    background: linear-gradient(96deg, #ff9a62, #ff5f00), #ff5f00;
    width: 80%;
    height: 50px;
    border-radius: 25px;
    border: none;
    font-size: 16px;
    color:#fff;
    transition: all .2s ease;
}

.LogBtn:hover {
    opacity: 0.8;
    cursor: pointer;
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