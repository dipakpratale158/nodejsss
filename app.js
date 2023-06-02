const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');
const mysql=require('mysql2')
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
// const { createConnection } = require('net');
// const db = require('./utils/database');
const sequelize=require('./utils/database');
// first remove product
// const Product = require('./models/ProductModel');
const categoryRoutes=require('./routes/categoryRoutes')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');



// const db=mysql.createPool({
//   host:'localhost',
//   user:'root',
//   password:'Dipak@12345',
//   database:'nodeeccommerseapp',
// })


// db.query('Select * from products',(error,result,fields)=>{
//   console.log(error)
//   console.log(result)
//   console.log(fields)
// })


// db.execute('Select * from products where id > ?', [0] ,(error,result,fields)=>{
//   console.log(error)
//   console.log(result)
//   console.log(fields)
// })


// db.execute(`Select * from products`).then(([data,field])=>{
//   console.log(data)
// }).catch((error)=>{
// console.log(error)
// })


//Static files
app.use(express.static(path.join(rootDir, 'public')));
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use(homeRoutes);
app.use('/products', adminRoutes);
app.use('/categories', categoryRoutes)
app.use((req, res) => {
  const viewsData = {
    pageTitle: 'Page Not Found'
  };
  res.status(404).render('404', viewsData);
});


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('connection established successfully');
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log('Error in establishing connection');
//   });


// product.sync()
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);

// })


sequelize.sync()
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);

})

// const sampleProduct = {
//   title:'sample product 1',
//   description:'sample product 1',
//   price:13.99,
//   imageUrl:'dasdsa'
// }



// const product=Product.build(sampleProduct)
// // console.log(product instanceof Product)
// product.save()

// Product.create(sampleProduct)
// .then((result)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })

app.listen(3001, () => {
  console.log('server started at port 3000');
});