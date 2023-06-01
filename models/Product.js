// //simple module
// const products=[]
// exports.saveProduct=(product)=>{
//     products.push(product)
// }

// exports.getAllProducts=()=>{
//     return products
// }

// //go to product controller

//save data




// const fs = require('fs');
// const path = require('path');
// const rootDir = require('../utils/path');

// const getProductsFromFile = (callBack) => {
//   const productsPath = path.join(rootDir, 'data', 'products.json');
//   fs.readFile(productsPath, (error, productsData) => {
//     if (error) {
//       return callBack([]);
//     }

//     return callBack(JSON.parse(productsData));//get data
//   });
// };

// exports.saveProduct = (product) => {
//   const productsPath = path.join(rootDir, 'data', 'products.json');

//********************* */
  //  getProductsFromFile(productsData=>{
    //after geting product data
    // productsData.push(product)

  //  })
//     fs.readFile(productsPath, (error,productData)=>{
//   let product=[]
//   if(!error){
//    products=JSON.parse(productsData)
//   }
// **********//after adding data then remove hear ang past callbackfunction getProductsFromFile  products.push(product)
//   fs.writeFile(productsPath,JSON.stringify(products),error=>{
//     console.log(error)
//   })
// })
// }


// exports.fetchAllProducts = (callBack) => {
  // const productpath=path.join(rootDir,'data','products.json')
  // fs.readFile(productpath,(error,productsData)=>{
  //   return JSON.parse(productData)
  // })
////go to home controller  convet getproduct to fetchproduct

// file is createddata adeede but i want get product so productlenth nerror read fgile take some time immedetly get home page so wait and then rendet so fetch all product callback function in home controller


// exports.fetchAllProducts = (callBack) => {
  // const productpath=path.join(rootDir,'data','products.json')
  // fs.readFile(productpath,(error,productsData)=>{
      // const products=JSON.parse(productsData)
      // callBack(products)  
  // })

// so added product


// now add get product  after convertion belo so no need to fetchfile again just call getproductfile


const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const db = require('../utils/database');

const { deleteProductFromCart } = require('./Cart');
// const { json } = require('sequelize');

const getProductsFromFile = (callBack) => {
  const productsPath = path.join(rootDir, 'data', 'products.json');
  fs.readFile(productsPath, (error, productsData) => {
    if (error) {
      return callBack([]);
    }

    return callBack(JSON.parse(productsData));//get data
  });
};

// exports.saveProduct = (product) => {
//   const productsPath = path.join(rootDir, 'data', 'products.json');

//   getProductsFromFile((productsData) => {
//     productsData.push(product);  //add data
//     fs.writeFile(productsPath, JSON.stringify(productsData), (error) => {
//       console.log(error);
//     });
//   });
// };
exports.saveProduct = (product) => {///preapare statemennt 1234
  return db.execute(`INSERT INTO products (title, description, price, imageUrl) values (?,?,?,?)`, [
    product.title,
    product.description,
    product.price,
    product.imageUrl
  ]);
};








// //no need calllback beacause using promises
// exports.fetchAllProducts = (callBack) => {
//   // getProductsFromFile(callBack);
// };

// ////



exports.fetchAllProducts = () => {
  return db.execute(`SELECT * FROM products`);
};

exports.getProductById = (productId, callBack) => {
  getProductsFromFile((products) => {
    const product = products.find((p) => p.id.toString() === productId);
    callBack(product);
  });
};

exports.updateProductById = (product, productId) => {
  const productsPath = path.join(rootDir, 'data', 'products.json');
  getProductsFromFile((products) => {
    const existingProductIndex = products.findIndex((prod) => prod.id.toString() === productId);

    const updatedProducts = [...products];
    updatedProducts[existingProductIndex] = product;
    fs.writeFile(productsPath, JSON.stringify(updatedProducts), (error) => {
      console.log(error);
    });
  });
};
//after update productccontroller



exports.deleteProductById = (productId, callBack) => {
  const productsPath = path.join(rootDir, 'data', 'products.json');
  getProductsFromFile((products) => {
    let updatedProducts = products.filter((product) => product.id.toString() !== productId.toString());
    deleteProductFromCart(productId);

    fs.writeFile(productsPath, JSON.stringify(updatedProducts), (error) => {
      console.log(error);
    });
    callBack();
  });
};