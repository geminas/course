const Koa = require('koa');
const app = new Koa();
var router=require('koa-router')()
var logger=require('koa-logger')
//var app=koa()
app.use(logger())
router
.get('/',async (ctx,next)=>{
    console.log('this is the root')
    await next()
})
.get('/abc',async (ctx,next)=>{
    console.log('this is the abc func')
    await next()
})
.all('/foo',async (ctx,next)=>{
    console.log('this is the foo func')
    console.log(1)
    await next()
    console.log(2)
}, async (ctx,next)=>{
    console.log('this is the foo func2')
    console.log(3)
    await next()
    console.log(4)
},async (ctx,next)=>{
    console.log('this is the foo func3')
    console.log(5)
    await next()
    console.log(6)
},async (ctx,next)=>{
    console.log(7)
    console.log('this is the foo func4')
    await next()
    console.log(8)
})
.post('/users', async (ctx,next)=> {
    console.log('Here is the users body')
    await next()
  })
.put('/users/:id', async (ctx,next)=> {
  console.log('put the user:'+ctx.params.id)
  await next()
})
.del('/users/:id', async (ctx,next)=> {
  console.log('del the user:'+ctx.params.id)
  await next()
});
app.use(async (ctx,next)=>{
    console.log(3)
    var start = new Date;
    await next();
    var ms = new Date - start;
    console.log('%s %s - %s', ctx.method, ctx.url, ms);
    console.log(4)
});
app.use(router.routes())

app.use(async (ctx)=>{
    console.log(9)
    ctx.body="Ok, I Got Ur Request"
    console.log(10)
})

app.listen(process.argv[2]||3000)

