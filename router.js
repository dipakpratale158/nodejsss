
const fs=require('fs')

const routes=(req,res)=>{
    if(req.url==="/"){
        return setHomePage(req,res)
          }
       
       
       if(req.url==="/username"){
       return  submitusername(req,res)
       }
}
//buffer data
function submitusername(req,res){
    res.setHeader('Content-Type','text/html')
    //recive request body
    //save it in file
    //redirect to home page 
    const body=[]
    req.on('data',(data)=>{
    body.push(data);
    })
    
    req.on("end",()=>{
        console.log(body)
    const reqbody=Buffer.concat(body).toString()
    const username=reqbody.split("=")[1]
    //afyter reciving data
    
    
    // fs.writeFileSync('username.txt',username)
    // console.log(reqbody)
    // })
    fs.writeFile('username.txt',username, ()=>{
    
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    })
    })
    
    
    
    
    
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
    
       module.exports={
        routes,
        text:'hai dipak'
       }