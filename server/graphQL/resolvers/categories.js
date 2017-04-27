const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const categoriesResolver = () => {
  return (async function() {
    let dbCall;
    try {
      dbCall = await db.any(sql.categories.getAll);
    } catch (error) {
      dbCall = error;
    }
    return dbCall;
  })();
};

module.exports = categoriesResolver;
