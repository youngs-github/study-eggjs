import { Service } from 'egg';

export default class UserService extends Service {
  /**
   * 获取用户
   */
  public async getUsers() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'young'
          },
          {
            id: 2,
            name: 'douzi'
          }
        ]);
      }, 20);
    });
  }
}
