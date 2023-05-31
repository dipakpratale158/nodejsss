// const { products } = require('../utils/Products');

// exports.getHomePage = (req, res) => {

//     const viewsData = {
//       products,
//       pageTitle: 'Home Page - Products List'
//     };
//     res.render('homepage', viewsData);
//   });
// };

//if error getallproduct not a function
// const { getAllProducts } = require('../utils/Products');

// exports.getHomePage = (req, res) => {

//     const viewsData = {
//       products:getAllProduct(),
//       pageTitle: 'Home Page - Products List'
//     };
//     res.render('homepage', viewsData);
//   });
// };


// const { fetchAllProducts } = require('../utils/Products');

// exports.getHomePage = (req, res) => {

//     const viewsData = {
//       products:fetchAllProducts(),
//       pageTitle: 'Home Page - Products List'
//     };
//     res.render('homepage', viewsData);
//   });
// };

//i got error when getting data  product length
const { fetchAllProducts,getProductById } = require('../models/Product');

exports.getHomePage = (req, res) => {
  fetchAllProducts((products) => {
    const viewsData = {
      products,
      pageTitle: 'Home Page - Products List'
    };
    res.render('homepage', viewsData);
  });
};

exports.getProductDetailsPage = (req, res) => {
  const productId = req.params.productId;
  getProductById(productId, (product) => {
    //gotproduct
    const viewsData = {
      product,
      pageTitle: product.title
    };
    res.render('ProductDetails', viewsData);
  });
};