const Controller = require("egg").Controller;

class StudentController extends Controller {
    async create(){
        let name = this.ctx.request.body.name;
        let achievement = this.ctx.request.body.achievement;
        let clazz_id = this.ctx.request.body.clazz_id;
        // await this.app.model.Student.create({
        //     name:name,
        //     achievement:achievement,
        //     clazz_id:clazz_id
        // })
        // this.ctx.body = "添加成功"
        let result = await this.ctx.service.student.createStudent(name,achievement,clazz_id)
        if(result){
            this.ctx.body = {
                code:20000,
                msg:"添加成功"
            }
        }else{
            this.ctx.body = {
                code:50000,
                msg:"数据添加失败，请与管理员联系"
            }
        }
    }

    async index(){
        // let student_List = await this.app.model.Student.findAll();
        // this.ctx.body = student_List;
        let list = await this.ctx.service.student.getStudentList();
        if(list){
            this.ctx.body = {
                code:20000,
                data:list
            }
        }else{
            this.ctx.body = {
                code:50000,
                msg:"服务器异常，请与管理员联系"
            }
        }
    }
}


module.exports = StudentController