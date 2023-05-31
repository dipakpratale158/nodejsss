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

const { fetchAllProducts } = require('../models/Product');

exports.getHomePage = (req, res) => {
  //so add fetchallproducts get call back function when you get allproduct detail
  //call to callback function
  //go producyt file
  fetchAllProducts((products) => {
    const viewsData = {
      products,
      pageTitle: 'Home Page - Products List'
    };
    res.render('homepage', viewsData);
  });
};