const Controller = require("egg").Controller;
let fruitList = [
    "香蕉",
    "苹果",
    "鸭梨"
]
class FruitsController extends Controller {

    async index(){
        // let query = this.ctx.request.query;// query为获取到get请求的url中？后面的参数，形如?in=100,就可以获得{in:"100"},就有且只有一个键值对
        // console.log(query);
        // this.ctx.body = `传递的index值为${query.index}` //ctx表示上下文对象，body表示响应内容
        this.ctx.body = fruitList;
    }

    async new(){
        this.ctx.body = `
                <form method="post" action="/fruits">
                    <input name="fruitname">
                    <button>添加</button>
            `
    }

    async create(){
        let fruit = this.ctx.request.body;
        fruitList.push(fruit.fruitname);
        // this.ctx.body = "ok"
        // 跳转到/fruits get请求
        this.ctx.redirect("/fruits");
    }

    // async getId(){
    //     let id = this.ctx.params.id;//也是get请求，先在路由里面写好/:id，即表示绑定了id属性在params中，在url中输入/123,就可以获取到这个123，表示id=123
    //     this.ctx.body = `传递的id是${id}`
    // }

    // async createPage(){
    //     this.ctx.body = `
    //         <form method="post" action="/createfruit">
    //             <input name="fruitname">
    //             <button>添加</button>
    //     `
    // }

    // async createFruit(){
    //     let fruit = this.ctx.request.body;
    //     fruitList.push(fruit.fruitname);
    //     this.ctx.body = "ok"
    // }
}

module.exports = FruitsController;