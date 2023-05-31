


// const express=require('express')
// const path=require('path')
// const Router=express.Router()
// //get  exact matching get use if i am using use all pathe home page display
// Router.get('/',(req,res,next)=>{
//     res.sendFile(path.join(__dirname , '../','views','homepage.html'))
// })

// module.exports=Router




const express = require('express');
const router = express.Router();
const { getHomePage } = require('../controllers/HomeController');

router.get('/', getHomePage);

module.exports = router;