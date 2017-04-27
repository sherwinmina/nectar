const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const productsResolver = () => {
  return (async function() {
    let products;
    try {
      products = await db.any(sql.products.getAll);
    } catch (error) {
      products = error;
    }
    const resolvedProducts = products.map(product => {
      product.owner = product.username;
      return product;
    });
    return resolvedProducts;
  })();
};

module.exports = productsResolver;
