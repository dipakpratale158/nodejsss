

// const http=require('http')
// const server=http.createServer((req,res)=>{
//    if(req.url==="/"){
//  return setHomePage(req,res)
//    }
// })

//    function setHomePage(req,res){

//     res.setHeader('Content-Type','text/html')
//     res.write('<html>')
//     res.write('<head><title>leeta and web dev</title></head>')
//     res.write('<body><h1>hellow Dipak </h1></body>')
//     return res.end('</html>')
//    }

// server.listen(3000)




const http=require('http')
const server=http.createServer((req,res)=>{
   if(req.url==="/"){
 return setHomePage(req,res)
   }


if(req.url==="/username"){
return  submitusername(req,res)
}
})

function submitusername(req,res){
res.setHeader('Content-Type','text/html')
//recive request body
//save it in file
//redirect to home page 
res.statusCode=302
res.setHeader('Location','/')
return res.end()
}


   function setHomePage(req,res){

    res.setHeader('Content-Type','text/html')
    return res.end(
        `<!doctype html>
        <html>
        <head>
        <title>Dipak web devolopment</title>
        </head>
        <body>
        <form action="/username" method="post">
        <div>
        <lable>Enter username</lable>
        <input type="text" name="username"/>
        </div>
        <div>
        <input type="submit" value="send"/>
        </div>
        </form>
        </body>
        </html>`
    )
   }

server.listen(3000)
