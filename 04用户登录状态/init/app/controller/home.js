'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    if(this.ctx.session.user){
       await ctx.render("index")
    }else{
      ctx.redirect("/login")
    }
   
  }

  async login(){
    await this.ctx.render("login")
  }

  async logout(){
    this.ctx.session.user = "";
    this.ctx.redirect("/login")
  }

  async doLogin(){
    let usr = this.ctx.request.body.username;
    let psw = this.ctx.request.body.password;
    if(usr=="lxx" && psw == "123"){
      this.ctx.session.user= usr;
      this.ctx.redirect("/")
    }else{
      this.ctx.redirect("/login")
    }
  }
}

module.exports = HomeController;
