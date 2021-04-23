const Controller = require("egg").Controller;

class JwtController extends Controller {
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
            let decode = this.app.jwt.verify("token", this.app.config.jwt.secret);
            this.ctx.body = decode
        }catch(e){
            this.ctx.body="token验证失败"
        }
    }
}

module.exports = JwtController