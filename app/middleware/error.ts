/**
 * 全局异常打印中间件
 */
export default (options, app) => {
  return async (ctx, next) => {
    try {
      if (app) {
      }
      if (ctx) {
      }
      if (options) {
      }
      console.log('error ing...');
      await next();
      console.log('error after...');
    } catch (e) {
      console.log('error has', e.message);
    } finally {
      if (!ctx.body) {
        ctx.body = {
          code: 500,
          message: '服务器内部错误！'
        };
      }
    }
  };
};
