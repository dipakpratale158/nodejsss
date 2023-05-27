const express=require('express')


const app=express()
//whenever incoming message 
// app.use((req,res,next)=>{
// console.log("first middleware")
// })

// app.use((req,res,next)=>{
//     console.log("second middleware")
//     })

    //when see console only first middelwher execute


    // app.use((req,res,next)=>{
    //     console.log("first middleware")
    //     next()
    //     })
        
    //     app.use((req,res,next)=>{
    //         console.log("second middleware")
    //         })

    // //when see console using next method  first middelwher and second middleware  execute


//request routing
// app.use("/",(req,res,next)=>{
//     console.log("first request")
// })



//sending request appropriate
// browser display content
// app.use("/",(req,res,next)=>{
// // res.send("this is the home page")
// //convert content type to application/json
// res.send({name:"dipak"})
// })

app.use((req,res,next)=>{
    console.log('login the request')
    //if i am next not move next because already set response
next()
})

//app.get and app.use same
//app.post 
app.get('/users',(req,res,next)=>{
    res.send('this is user page')
})


app.get('/user/add',(req,res)=>{
res.send(`<form method="POST">
<div>
<input name="username">
</div>
<div>
<button>Add user</button>
</div>
</form>`)
})



app.post('/user/add',(req,res)=>{
    //body parser request data
    //install npm bodyparser
console.log('post request')
})
app.get('/',(req,res,next)=>{
    res.send('<h1>this is user page dipak</h1>')
})

//  / matchest so go above this code 


//when open server not send any requset so  not showing anything in server or google 

app.listen(3001,()=>{
    console.log("server live 3003")
})