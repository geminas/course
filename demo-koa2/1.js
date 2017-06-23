const Koa = require('koa');
const app = new Koa();
const http = require('http');
// x-response-time

app.use(async (ctx, next) =>{
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async  (ctx, next)=> {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.use(ctx=>{
  ctx;
  ctx.request;
  ctx.response;
})
//app.listen(3000);
http.createServer(app.callback()).listen(3000);
http.createServer(app.callback()).listen(3001);