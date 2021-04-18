import { Controller } from 'egg';

/**
 * 用户控制器
 */
export default class UserController extends Controller {
  /**
   * 获取用户列表
   */
  public async getUserList(ctx) {
    ctx.body = await ctx.service.user.getUsers();
  }
  /**
   * 测试post请求
   */
  public async postUser(ctx) {
    console.log('ip', ctx.ip);
    console.log('url', ctx.url);
    console.log('path', ctx.path);
    console.log('query', ctx.query);
    console.log('method', ctx.method);
    console.log('params', ctx.params);
    console.log('search', ctx.search);
    console.log('cookies', ctx.headers.cookie);
    console.log('request', ctx.request.body);
    console.log('querystring', ctx.querystring);
    ctx.body = {
      a: 1,
      b: 2
    };
  }
}
