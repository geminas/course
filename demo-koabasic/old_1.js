var koa=require('koa')
var http=require('http')
var bodyParser=require('koa-bodyparser')
var logger=require('koa-logger')
var app=koa()
app.use(logger())
//app.use(bodyParser())
// app.use(function *(){
//     console.log(this.request.body)
// })
app.use(function *(next){
    var body=[]
    this.req.on('data',function(chunk){
        console.log("data")
        body.push(chunk)
    })
    .on('end',function(){
       console.log(Buffer.concat(body).toString())
    })
    yield next
    console.log('done')
    console.log(this.type)
})
app.use(function *(){
    var req=this.req
    var res=this.res
    console.log(req.url)
    console.log(this.query)
    console.log(req.type)
    console.log(req.method)
    console.log(this.host)
    console.log(this.request.body)
    // if(this.url=="/hello"){
    //     this.redirect("/world")
    // }
    var body=[]
    // this.request.on('data',function(chunk){
    //     body.push(chunk)
    // }).on('end',function(){
    //     body=Buffer.concat(body).toString()
    //     console.log(body)
    // })
    this.body="Yes,I Got Your Request"

})

app.listen(process.argv[2]||3000)