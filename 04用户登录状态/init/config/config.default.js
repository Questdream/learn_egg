/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1619163054997_467';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.jwt = {
    secret:"lxx"
  };
  config.cors = {
    origin: "*", //允许所有跨域访问，注释掉则允许上面白名单访问
    credentials:true, // 允许跨域请求携带cookie
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.security = {
    csrf: {
      enable:false,
    }
  };

  config.view = {
    defaultViewEngine : 'nunjucks'
  }


  return {
    ...config,
    ...userConfig,
  };
};
