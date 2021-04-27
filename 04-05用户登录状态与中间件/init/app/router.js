'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.post('/login', controller.home.doLogin);
  router.post('/logout', controller.home.logout);
  router.get('/jwt', controller.jwt.index);
  router.post("/jwtlogin", controller.jwt.doLogin);
  router.get("/jwtmsg", app.middleware.checktoken(), controller.jwt.getMsg);

};
