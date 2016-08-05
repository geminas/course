var koa=require('koa')
var router=require('koa-router')()
var logger=require('koa-logger')
var app=koa()
app.use(logger())
router.get('/',function *(next){
    console.log('this is the root')
    yield next
})
.all('/foo',function *(next){
    console.log('this is the foo func')
    yield next
},function *(next){
    console.log('this is the foo func2')
    yield next
},function *(next){
    console.log('this is the foo func3')
    yield next
},function *(next){
    console.log('this is the foo func4')
    yield next
})
.post('/users', function *(next) {
    console.log('Here is the users body')
    yield next
  })
  .put('/users/:id', function *(next) {
    console.log('put the user:'+this.params.id)
    yield next
  })
  .del('/users/:id', function *(next) {
    console.log('del the user:'+this.params.id)
    yield next
  });
app.use(router.routes())

app.use(function *(){
    this.body="Ok, I Got Ur Request"
})

app.listen(process.argv[2]||3000)

