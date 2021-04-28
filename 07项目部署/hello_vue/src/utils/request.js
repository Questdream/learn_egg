import axios from "axios";

const request = axios.create({
    baseURL:process.env.VUE_APP_BASE_API
})

// 拦截器
request.interceptors.request.use((req) => {
    let token = localStorage.getItem("token");
    if(token){
        req.headers.token = token;
    }
    return req
})

export default request;