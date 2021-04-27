const Controller = require("egg").Controller;

class JwtController extends Controller {

    async doLogin(){
        let user = this.ctx.request.body.user; //
        if(user.username === "lxx" && user.password === "123"){
            let user_jwt = {username:user.username}
            let token = this.app.jwt.sign(user_jwt,this.app.config.jwt.secret);
            this.ctx.body = {
                code:20000,
                token:token
            }
        }else{
            this.ctx.body = {
                code:40000,
                msg: "用户名或密码错误"
            }
        }
    }

    async getMsg(){
        
        // let token = this.ctx.request.header.token;
        // console.log(token);
        this.ctx.body = "hello jwt"
        // try{
        //     let decode = this.app.jwt.verify(token, this.app.config.jwt.secret);
        //     this.ctx.body = "hello jwt"
        // }catch(e){
        //     this.ctx.body="token验证失败"
        // }

    }


    async index(){
        // this.ctx.body = "hi jwt"
        let user = {
            username:"lxx"
        }
        // egg-jwt加密
        let token = this.app.jwt.sign(user, this.app.config.jwt.secret);
        // this.ctx.body = token;

        // egg-jwt解密
        // let decode = this.app.jwt.verify("token", this.app.config.jwt.secret);
        // this.ctx.body = decode
        try{
            let decode = this.app.jwt.verify(token, this.app.config.jwt.secret);
            this.ctx.body = decode
        }catch(e){
            this.ctx.body="token验证失败"
        }
    }
}

module.exports = JwtController