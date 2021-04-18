import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // 模板引擎
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  // swagger
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc'
  },
  // validate
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  // mongo
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};

export default plugin;
