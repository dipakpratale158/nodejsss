
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


const { saveProduct,fetchAllProducts, getProductById, updateProductById, deleteProductById } = require('../../models/Product');
const Product = require('../../models/ProductModel');
// const Product = require('../../models/ProductModel');

exports.getAddProductPage = (req, res) => {
  const viewsData = {
    edit:false,
    pageTitle: 'Add Product'
  };
  res.render('AddProduct', viewsData);
};


//add data
exports.postAddProductPage = (req, res) => {
  const product = {

    //add mote input field
    //no need database id because automaticaly created in database
    // id:Date.now(),
    title: req.body.title,
    imageUrl: req.body.image,
    price: req.body.price,
    description: req.body.description
  };
  // saveProduct(product);
  // res.redirect('/');

// saveProduct(product).then(()=>{
//       res.redirect('/');
// }).catch(error=>{
//   console.log(error)
// })
  const productObj = Product.build(product);
  productObj
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });

  }
  // using sequiilze when i am adding data get data in mysql database
//   Product.create(product)
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };










/////////////
// exports.getAdminProductsPage = (req, res) => {
//   fetchAllProducts((products) => {
//     const viewsData = {
//       admin: true,
//       pageTitle: 'Admin Products',
//       products
//     };
//     res.render('product-list', viewsData);
//   });
// };

// exports.getAdminProductsPage = (req, res) => {
//   fetchAllProducts()
//     .then(([products]) => {
//       const viewsData = {
//         admin: true,
//         pageTitle: 'Admin Products',
//         products
//       };
//       res.render('product-list', viewsData);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

exports.getAdminProductsPage = (req, res) => {
  Product.findAll()
    .then((products) => {
      const viewsData = {
        admin: true,
        pageTitle: 'Admin Products',
        products
      };
      res.render('product-list', viewsData);
    })
    .catch((error) => {
      console.log(error);
    });
};


//edit  whenever i am change go cart.js filke 
// exports.getEditProductPage = (req, res) => {
//   const productId = req.params.productId;

//   getProductById(productId, (product) => {
//     const viewsData = {
//       edit: true,
//       product,
//       pageTitle: 'Edit Product'
//     };
//     //addprpduct
//     res.render('AddProduct', viewsData);
//   });
// };


exports.getEditProductPage = (req, res) => {
  const productId = req.params.productId;

  Product.findByPk(productId).then(product=>{
    const viewsData = {
      edit: true,
      product,
      pageTitle: 'Edit Product'
    };
    //addprpduct
    res.render('AddProduct', viewsData);
  }).catch((error) => {
    console.log(error);
  });

   
};


// exports.postEditProductPage = (req, res) => {
//   // console.log(req.body)
//   const product = {
//     id: req.body.productId,
//     title: req.body.title,
//     price: req.body.price,
//     description: req.body.description,
//     image: req.body.image
//   };
//   //hearupadte
//   updateProductById(product, req.body.productId);
//   res.redirect('/products');
// };

//1st way
// exports.postEditProductPage = (req, res) => {
//   // console.log(req.body)
//   const productId=req.body.productId
//   const product = {
//     // id: req.body.productId,
//     title: req.body.title,
//     price: req.body.price,
//     description: req.body.description,
//     image: req.body.image
//   };
//   Product.update(product,{where:{id:productId}})
//   .then(()=>{
//     res.redirect('/products');

//   }).catch((error) => {
//     console.log(error);
//   });
// };


// 2nd way
exports.postEditProductPage = (req, res) => {
  // console.log(req.body)
  const productId=req.body.productId
  
  Product.findByPk(productId)
  .then((product)=>{
    product.title=req.body.title
    product.price=req.body.price
    product.description=req.body.description
    product.imageUrl=req.body.image
return product.save()
  }).then(()=>{
    res.redirect('/products')
  }).catch((error)=>{
    console.log(error)
  })
 
};


// exports.postDeleteProductPage = (req, res) => {
//   const productId = req.body.productId;
//   deleteProductById(productId, () => {
//     res.redirect('/products');
//   });
// };

//2 diffrent way delete product


// exports.postDeleteProductPage = (req, res) => {
//   const productId = req.body.productId;
//   Product.destroy({where:{id:productId}})
//   .then(()=>{
//     res.redirect('/products')
//   })
//   .catch((error)=>{
// console.log(error)
//   })
// };


exports.postDeleteProductPage = (req, res) => {
  const productId = req.body.productId;
  Product.findByPk(productId)
    .then((product) => {
      return product.destroy();
    })
    .then(() => {
      res.redirect('/products');
    })
    .catch((error) => {
      console.log(error);
    });
};
