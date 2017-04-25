const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const userResolver = (username) => {
  return db.one(sql.users.get, username)
    .then(user => user)
    .catch(err => err);
};

module.exports = userResolver;
