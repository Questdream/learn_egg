module.exports = app => {
    app.beforeStart(async function(){
        // beforeStart egg生命周期函数，启动时执行
        await app.model.sync({}); // 创建数据库的方法
    })
}