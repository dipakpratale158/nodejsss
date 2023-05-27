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


    app.use((req,res,next)=>{
        console.log("first middleware")
        next()
        })
        
        app.use((req,res,next)=>{
            console.log("second middleware")
            })

    //when see console using next method  first middelwher and second middleware  execute


//when open server not send any requset so  not showing anything in server or google 

app.listen(3001,()=>{
    console.log("server live 3000")
})