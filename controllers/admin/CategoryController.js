const Category = require('../../models/CategoryModel');
//getCategoryPage
exports.getCategoryPage = (req, res) => {
  Category.findAll().then((categories) => {
    const viewsData = {
      pageTitle: 'Categories List',
      categories
    };

    res.render('admin/categories/categoriesPage', viewsData);
  });
};

exports.getAddCategoryPage = (req, res) => {
  const viewsData = {
    pageTitle: 'Add Category'
  };

  res.render('admin/categories/addCategoryPage', viewsData);
};

exports.postAddCategoryPage = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  Category.create({ title, description })
    .then(() => {
      res.redirect('/categories');
    })
    .catch((error) => {
      console.log(error);
    });
};