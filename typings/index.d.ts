import 'egg';

declare module 'egg' {
  export interface Application {
    [k: string]: any;
  }
  export interface Request {
    [k: string]: any;
  }
  export interface Response {
    [k: string]: any;
  }
}
