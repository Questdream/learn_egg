module.exports = app => {
    const {STRING,DOUBLE} = app.Sequelize;
    // 默认情况下，sequelize将自动把所有传递的模型名称（define的第一个参数）转换为复数形式
    const Student = app.model.define('student', {
        // id 自动生成
        name:STRING,
        achievement:DOUBLE
    })
    Student.associate = function(){// 所属哪个班级，指向班级主键
        app.model.Student.belongsTo(app.model.Clazz,{
            foreignKey:"clazz_id",
            as:"clazz"
        })
    }

    return Student;
}