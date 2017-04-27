const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const userResolver = (username) => {
  return (async function() {
    let user;
    try {
      user = await db.one(sql.users.get, {username});
    } catch (error) {
      user = error;
    }
    return user;
  })();
};

module.exports = userResolver;
