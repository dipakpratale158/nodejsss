const express=require('express')
const bodyparser=require('body-parser')

const adminRoute=require('./route/admin')
const homeRoute=require('./route/home')
const app=express()


app.use(bodyparser.urlencoded({extended:false}))


app.use('/users',adminRoute)
app.use(homeRoute)

//404 error
app.use((req,res)=>{
res.status(404).send(`<h1>404 error found</h1>`)
})


app.listen(3001,()=>{
    console.log("server live 3003")
})