
///node js non blocking code asynchronous behaiver

const http=require('http')
const routes=require('./router')
const server=http.createServer(routes.routes)
  console.log(routes.text)


server.listen(3001,()=>{
    console.log('server listening at 3001 port')
})


//npm init 
//pacage name 
//version
// description
//entry point
//test command
//git repository:
//keyword
//author:enter name autor
// licen
//enter
//yes
// go check vs code pacage.json file created
//npm install nodemon --save-dev   not run again and agin save automaticaly
//npm start
// go pacage json enter start:node app.js insted of nodemon app.js