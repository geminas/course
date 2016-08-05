var koa = require('koa');
var app = koa();
// x-response-time
app.use(function *(next){
    console.log(1)
var start = new Date;
yield next;
console.log(2)
var ms = new Date - start;
this.set('X-Response-Time', ms + 'ms');
});
// logger
app.use(function *(next){
    console.log(3)
var start = new Date;
yield next;
var ms = new Date - start;
console.log('%s %s - %s', this.method, this.url, ms);
console.log(4)
});
// response
app.use(function *(){
    console.log(5)
this.body = 'Hello World';
console.log(6)
});
app.listen(3003



)
