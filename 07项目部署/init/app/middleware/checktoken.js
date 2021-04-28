function checktoken(){
    return async function(ctx,next){
        // 验证token
        try {
            let token = ctx.headers.token;
            ctx.app.jwt.verify(token, ctx.app.config.secret);
            await next()
        } catch (error) {
            ctx.body = {
                code:40000,
                msg: "token验证失败"
            }
        }
    }
};

module.exports = checktoken;