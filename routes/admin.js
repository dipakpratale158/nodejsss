// const express=require('express')
// const path = require('path')

// const Router=express.Router()
// Router.get('/',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'../','views','user.html'))
// })


// Router.get('/add',(req,res)=>{
// res.sendFile(path.join(__dirname,'../','views','add.html'))
// })



// Router.post('/add',(req,res)=>{
//     //body parser request data
//     //install npm bodyparser
//     console.log(req.body)
// console.log('post request')
// res.redirect('/')
// })
// module.exports=Router




const express = require('express');
const { getAddProductPage, postAddProductPage, getAdminProductsPage, getEditProductPage } = require('../controllers/admin/ProductController');

const router = express.Router();
router.get('/',getAdminProductsPage)
router.get('/add', getAddProductPage);
router.post('/add', postAddProductPage);
router.get('/edit/:productId',getEditProductPage)
module.exports = router;