'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources("clazz", "/clazz", controller.clazz);
  router.resources("student","/student",controller.student)
};
