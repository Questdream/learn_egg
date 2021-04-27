function checktoken(){
    return async function(ctx,next){
        console.log("hello middleware");
        // await next();
        try{
            //获取token
            let token = ctx.request.header.token;
            // 校验token
            let decode = ctx.app.jwt.verify(token,ctx.app.config.jwt.secret);
            if(decode.username){
                await next();
            }else{
                ctx.body = {
                    code:40000,
                    msg:"用户校验失败"
                }
            }
        }catch(e){
            ctx.body = {
                code:40000,
                msg:"token未通过验证"
            }
        }
    }
}

module.exports = checktoken;