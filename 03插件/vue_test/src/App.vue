<template>
  <div>
    <form @submit.prevent="postData">
      <input type="text" v-model="fruit">
      <button>添加</button>
    </form>
    <ul>
      <li v-for="(item,index) of fruitList" :key="index">
        {{item}}
        <button @click="del(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      fruitList:[],
      fruit:""
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      axios.get("http://127.0.0.1:7001/fruits").then((res) => {
      this.fruitList = res.data 
      })
    },
    postData(){
      axios.post("http://127.0.0.1:7001/fruits",{fruit:this.fruit})
      .then(() => {
        this.getData();
      })
    },
    del(index){
      axios.delete(`http://127.0.0.1:7001/fruits/${index}`)
      .then(() => {
        this.getData();
      })
    }
  }
}
</script>