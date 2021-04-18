import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1613533837503_4498';

  // 请求
  config.bodyParser = {
    enableTypes: ['form', 'json', 'text']
  };

  // 跨域
  config.cors = {
    origin: 'http://127.0.0.1:3000',
    allowMethods: 'GET,POST,PUT,HEAD,DELETE'
  };

  // api信息
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'youngs api',
      description: 'youngs swagger-ui for egg',
      version: '1.0.0'
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {},
    enableSecurity: false,
    enableValidate: false,
    routerMap: false,
    enable: true
  };

  // mongo
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017',
      options: {}
    }
  };

  // jwt
  config.jwt = {
    secret: '123456'
  };

  // 安全相关
  config.security = {
    // 取消csrf
    // 1、url中
    // 2、form中
    // 3、header中
    csrf: {
      enable: true,
      bodyName: 'x-csrf-token',
      queryName: 'x-csrf-token',
      headerName: 'x-csrf-token'
    }
  };

  // 模板引擎
  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  };

  // add your egg config in here
  config.middleware = ['error'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
