import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // 用户列表
  router.get('/users', controller.user.getUserList);
  // post请求
  router.post('/user', controller.user.postUser);
  // 模板引擎
  router.get('/home', controller.home.view);
  // 登录接口
  router.get('/login', controller.home.login);
  // 异常信息
  // router.get('/favicon', controller.home.favicon);
};
