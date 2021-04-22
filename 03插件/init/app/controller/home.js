'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render("index",{fruits:["香蕉","苹果","鸭梨"]})
  }

  async getData(){
    this.ctx.body="hello egg"
  }
}

module.exports = HomeController;
