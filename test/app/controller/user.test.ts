import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('用户接口 test/controller/user.test.ts', () => {
  it('用户列表', async () => {
    const result = await app.httpRequest().get('/users').expect(200);
    assert(result.body.length === 2);
    assert(result.body[0].id === 1 && result.body[0].name === 'young');
    assert(result.body[1].id === 2 && result.body[1].name === 'douzi');
  });
});
