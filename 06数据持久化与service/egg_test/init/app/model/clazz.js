module.exports = app => {
    const {STRING} = app.Sequelize;
    // 默认情况下，sequelize将自动把所有传递的模型名称（define的第一个参数）转换为复数形式
    const Clazz = app.model.define('clazz', {
        // id 自动生成
        name:STRING,
    })
    return Clazz;
}