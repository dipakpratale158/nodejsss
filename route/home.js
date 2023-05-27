


const express=require('express')

const Router=express.Router()
//get  exact matching get use if i am using use all pathe home page display
Router.get('/',(req,res,next)=>{
    res.send('<h1>this is user page dipak</h1>')
})

module.exports=Router