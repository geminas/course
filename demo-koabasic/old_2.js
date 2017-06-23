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
    console.log(1)
    yield next
    console.log(2)
},function *(next){
    console.log('this is the foo func2')
    console.log(3)
    yield next
    console.log(4)
},function *(next){
    console.log('this is the foo func3')
    console.log(5)
    yield next
    console.log(6)
},function *(next){
    console.log(7)
    console.log('this is the foo func4')
    yield next
    console.log(8)
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
    console.log(9)
    this.body="Ok, I Got Ur Request"
    console.log(10)
})

app.listen(process.argv[2]||3000)

