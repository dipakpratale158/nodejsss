const express=require('express')

const Router=express.Router()
Router.get('/',(req,res,next)=>{
    res.send('this is user page')
})


Router.get('/add',(req,res)=>{
res.send(`<form method="POST">
<div>
<input name="username">
</div>
<div>
<button>Add user</button>
</div>
</form>`)
})



Router.post('/add',(req,res)=>{
    //body parser request data
    //install npm bodyparser
    console.log(req.body)
console.log('post request')
res.redirect('/')
})
module.exports=Router