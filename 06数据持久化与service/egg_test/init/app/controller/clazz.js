const Controller = require("egg").Controller;

class ClazzController extends Controller {
    // restful : index(查看),create(增加),update(修改),destroy(删除)
    // 不做任何异常处理
    async index(){
        //let id = this.ctx.request.query.id;
        let clazzList = await this.app.model.Clazz.findAll();
        this.ctx.body = clazzList
    }

    async create(){
        let name = this.ctx.request.body.name;
        await this.app.model.Clazz.create({
            name:name
        })

        this.ctx.body = "增加成功"
    }

    async update(){
        let id = this.ctx.params.id;
        let name = this.ctx.request.body.name;
        await this.app.model.Clazz.update({name:name},{
            where:{
                id:id
            }
        })
        this.ctx.body = "更新班级数据"
    }

    async destroy(){
        let id = this.ctx.params.id;
        await this.app.model.Clazz.destroy({where:{
            id:id
        }})
        this.ctx.body = "删除班级数据"
    }

}

module.exports = ClazzController;