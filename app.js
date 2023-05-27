
///node js non blocking code asynchronous behaiver

const http=require('http')
const routes=require('./router')
const server=http.createServer(routes.routes)
  console.log(routes.text)


server.listen(3001,()=>{
    console.log('server listening at 3001 port')
})
