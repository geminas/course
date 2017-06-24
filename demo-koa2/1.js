const Koa = require('koa');
const app = new Koa();
const http = require('http');
// x-response-time

app.use(async (ctx, next) =>{
  const start = new Date();
  console.log(1);
  await next();
  console.log(2);
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async  (ctx, next)=> {
  const start = new Date();
  console.log(3)
  await next();
  await next1();
  console.log(4)
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(ctx => {
  console.log(5)
  ctx.body = 'Hello World';
  console.log(6)
});

//app.use(ctx=>{
  //ctx;
  //ctx.request;
  //ctx.response;
//})
//app.listen(3000);
http.createServer(app.callback()).listen(3005);
http.createServer(app.callback()).listen(3006);
