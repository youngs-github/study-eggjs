import { Controller } from 'egg';

/**
 * @Controller 主页
 */
export default class HomeController extends Controller {
  /**
   * @Summery 主页接口
   * @Description egg框架初始化接口
   * @Router get /
   * @Request query string
   */
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  /**
   * 模板引擎
   */
  public async view() {
    // // app注入方法
    // this.app.format(1);
    // // ctx注入方法
    // this.ctx.format(2);
    // // helper注入方法
    // this.ctx.helper.format(3);
    // // request注入方法
    // this.ctx.request.format(4);
    // // response注入方法
    // this.ctx.response.format(5);
    // 模拟报错
    if (Math.random() > 0.5) {
      throw new Error('favicon');
    }
    // cookie
    this.ctx.cookies.set('a', '1');
    this.ctx.cookies.set('b', '2');
    // 清除
    this.ctx.cookies.set('b', null);
    // 注入数据
    await this.ctx.render('home.ejs', {
      a: 1,
      b: 2,
      l: [3, 4, 5, 6],
      csrf: this.ctx.csrf
    });
  }

  /**
   * 登录接口
   */
  login() {
    this.ctx.body = this.app.jwt.sign(
      this.ctx.body || {
        a: 1,
        b: 2,
        c: 3
      },
      this.app.config.jwt.secret
    );
  }
}
