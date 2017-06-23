const http=require('http')
http.createServer(function(req,resp){
    resp.write("HelloWorld")
    resp.end()
}).listen(3002)
var start=()=>{
    http.createServer((req,resp)=>{
        console.log("Request Received...")
        resp.writeHead(200,{"Content-Type":"text/json"})
        resp.write(`{
            "msg":"OK,IGot The Msg"
        }`)
        resp.end()
    }).listen(3004)
}
exports.start=start