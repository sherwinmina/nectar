const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const categoriesResolver = () => {
  return db.any(sql.categories.getAll)
    .then(categories => categories.map((category) => {
      category.parentCategory = category.parenttitle;
      return category;
    }))
    .catch(error => error);
};

module.exports = categoriesResolver;
