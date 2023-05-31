
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


const { saveProduct,fetchAllProducts, getProductById } = require('../../models/Product');

exports.getAddProductPage = (req, res) => {
  const viewsData = {
    edit:false,
    pageTitle: 'Add Product'
  };
  res.render('AddProduct', viewsData);
};

exports.postAddProductPage = (req, res) => {
  const product = {

    //add mote input field
    id:Date.now(),
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  };
  saveProduct(product);
  res.redirect('/');
};
/////////////
exports.getAdminProductsPage = (req, res) => {
  fetchAllProducts((products) => {
    const viewsData = {
      admin: true,
      pageTitle: 'Admin Products',
      products
    };
    res.render('product-list', viewsData);
  });
};


//edit  whenever i am change go cart.js filke 
exports.getEditProductPage = (req, res) => {
  const productId = req.params.productId;

  getProductById(productId, (product) => {
    const viewsData = {
      edit: true,
      product,
      pageTitle: 'Edit Product'
    };
    //addprpduct
    res.render('AddProduct', viewsData);
  });
};