const koa = require('koa');
const app = new koa();
var router=require('koa-router')()
const koabdy=require('koa-body')
var fs=require('fs')
// x-response-time
router
    .all("/users/:id",async (ctx,next)=>{
        console.log("id:",ctx.params.id)
        await next()
    })
    .all("/api",async (ctx,next)=>{
        console.log(ctx.query)
        console.log(ctx.host,ctx.hostname)
        console.log(ctx.method)
        console.log(ctx.path)
        console.log(ctx.request.body)
        //console.dir(ctx.request)
        if(ctx.query.id=='-1'){
            ctx.throw(400,"Error for the query....")
        }
        await next()
        //ctx.body="I Got The Response:"+ctx.query.id
        
    })
    // .all("/api0",async(ctx,next)=>{
    //     var body=[]
    //     ctx.request.on('data',chunk=>{
    //         console.log("here")
    //         body.push(chunk)
    //     })
    //     ctx.request.on('end',()=>{
    //         console.log(Buffer.concat(body).toString())
    //     })
    //     console.log(body)
    //     await next()
    // })
app.use(koabdy())
app.use(router.routes())
app.use(async (ctx,next)=>{
    console.log(1)
    var start = new Date;
    await next();
    console.log(2)
    var ms = new Date - start;
    ctx.set('X-Response-Time', ms + 'ms');
});
// logger
app.use(async (ctx,next)=>{
    console.log(3)
    var start = new Date;
    await next();
    var ms = new Date - start;
    console.log('%s %s - %s', ctx.method, ctx.url, ms);
    console.log(4)
});
//app.use(router.routes())
// response
app.use(async (ctx)=>{
    console.log(5)
    //console.log(ctx.params.id)
    //ctx.body = 'Hello World';//Text
    ctx.body={message:"ok,msg"}//JSON
    //ctx.type='image/jpg'
    //ctx.body=fs.createReadStream("gg.jpg")

    console.log(6)
});
app.listen(3003)
