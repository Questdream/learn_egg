<template>
    <div>
        <h1>首页</h1>
        <button @click="getMsg">获取数据</button>
        <button @click="logout">注销</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
    methods:{
        getMsg(){
            let token = localStorage.getItem("token");
            axios.get("http://127.0.0.1:7001/jwtmsg",{headers:{token:token}})
            
        },
        logout(){
            localStorage.setItem("token","");
            location.reload();//自动刷新页面
        }
    }
}
</script>