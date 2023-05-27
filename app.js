// console.log("hellow world")

// const add=(a,b)=>{
//   return a+b  
// }
// console.log(add(1,3))

// ///run using node app.js  or  node app command 


const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req)
    //whatever request comming from clint url header 
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers)....

//handle request and response

res.setHeader('Content-Type','text/html')
res.write('<html>')
res.write('<head><title>leeta and web dev</title></head>')
res.write('<body><h1>hellow Dipak </h1></body>')
res.write('</html>')
})
server.listen(3000)

//first run node app 
//then go browser https://localhost.3000