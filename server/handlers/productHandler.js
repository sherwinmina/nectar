const db = require('../../db/dbConnection.js');
const sql = require('../../db/sql/sql.js');

module.exports = {

  addProduct: (req, res) => {

    db.query(sql.products.add, {
      owner: req.body.owner,
      category: req.body.category,
      subcategory: req.body.category,
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      inStock: req.body.inStock
    })
    .then((products) => {
      console.log('You successfully added a product');
      res.status(201).json('You added a product to the database.');
    })
    .catch((error) => {
      console.log('Failed to add product to the dtabase', error);
      res.status(400).json({
        error: 'Failed to add product.'
      });
    });
  },

  getAllProducts: (req, res) => {

    db.query(sql.products.getAll)
    .then((products) => {
      res.status(200).json(products);
      console.log('You just retrieved all the products.');
    })
    .catch((error) => {
      console.log('There was an error in getAllProducts.', error);
      res.status(400).json(error);
    });
  }

};
