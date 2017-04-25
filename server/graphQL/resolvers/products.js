const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const productsResolver = () => {
  console.log(5);
  return db.any(sql.products.getAll)
    .then(products => products.map((product) => {
      product.owner = product.username;
      return product;
    }))
    .catch(error => error);
};

module.exports = productsResolver;
