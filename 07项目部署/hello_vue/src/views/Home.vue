<template>
  <div class="home">
    <h1>数据：{{msg}}</h1>
    <button @click="logout">注销</button>
  </div>
</template>

<script>
// import axios from 'axios';
import request from "../utils/request"

export default {
  data(){
    return {
      msg:""
    }
  },
  methods: {
    logout(){
      localStorage.setItem("token","");
      location.reload();
    },
    getMsg(){
      // let token =localStorage.getItem("token")
      request.get(`/hello`).then((res) => {
        // console.log(res.data)
        this.msg = res.data.data[0].msg
      })

      // let token =localStorage.getItem("token")
      // request.get(`/hello`,{headers:{token}}).then((res) => {
      //   // console.log(res.data)
      //   this.msg = res.data.data[0].msg
      // })


      // axios.get(`${process.env.VUE_APP_BASE_API}/hello`,{headers:{token}}).then((res) => {
      //   // console.log(res.data)
      //   this.msg = res.data.data[0].msg
      // })
    }
  },
  created(){
    this.getMsg();
  }
}
</script>
