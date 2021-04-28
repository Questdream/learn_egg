const Controller = require("egg").Controller

class HelloController extends Controller {
    async index(){
        let result  = await this.ctx.service.hello.getMessage();
        if (result) {
            this.ctx.body = {
                code:20000,
                data:result
            }  //数据库拿到的数据
        } else {
            this.ctx.body = {
                code:50000,
                data: "数据获取失败，请与管理员联系"
            }
        }
        
    }
}

module.exports = HelloController;