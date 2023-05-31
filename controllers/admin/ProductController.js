
// const { addProduct } = require('../../models/Product');

// exports.getAddProductPage = (req, res) => {
//   const viewsData = {
//     pageTitle: 'Add Product'
//   };
//   res.render('AddProduct', viewsData);
// };

// exports.postAddProductPage = (req, res) => {
//   const product = {
//     title: req.body.title,

//   };
//   addProduct(product);
//   res.redirect('/');
// };
///shifted product to moducl page

const { saveProduct } = require('../../models/Product');

exports.getAddProductPage = (req, res) => {
  const viewsData = {
    pageTitle: 'Add Product'
  };
  res.render('AddProduct', viewsData);
};

exports.postAddProductPage = (req, res) => {
  const product = {

    //add mote input field
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  };
  saveProduct(product);
  res.redirect('/');
};