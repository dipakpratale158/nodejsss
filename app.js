const express=require('express')
const bodyparser=require('body-parser')

const app=express()

//ythis is also one of middleware   form submit data 
// evryreques write parse data parse body 
//[Object: null prototype] { username: 'Dipak' }
app.use(bodyparser.urlencoded({extended:false}))
//

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
    console.log(req.body)
console.log('post request')
res.redirect('/')
})
app.get('/',(req,res,next)=>{
    res.send('<h1>this is user page dipak</h1>')
})

//  / matchest so go above this code 


//when open server not send any requset so  not showing anything in server or google 

app.listen(3001,()=>{
    console.log("server live 3003")
})