const Service = require("egg").Service;
class StudentService extends Service {
    async getStudentList(){
        try{
            let student_List = await this.app.model.Student.findAll();
            return student_List;
        }catch(e){
            return null;
        }
    }

    async createStudent(name,achievement,clazz_id){
        try{
            await this.app.model.Student.create({
                name:name,
                achievement:achievement,
                clazz_id:clazz_id
            })
            return true;
        }catch(e){
            return false
        }
    }
}
module.exports = StudentService;