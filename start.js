const Koa = require('koa');
const koaStatic = require('koa-static');
const Router = require('koa-router');
const mount = require('koa-mount');
const path = require('path');
const fs = require('fs');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

const router = new Router();

const app = new Koa();

app.use(historyApiFallback());

app.use(mount('/', koaStatic(path.resolve(__dirname, './docs-dist'))));

app.use(mount('/pg-doc', koaStatic(path.resolve(__dirname, './public'))));

app.listen(9898, () => {
  console.log('server run on localhost:9898');
});
