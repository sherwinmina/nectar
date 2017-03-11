const db = require('./dbConnection.js');
const sql = require('./sql/sql.js');


db.tx((t) => {
  return t.batch([
    t.query(sql.users.init),
    t.query(sql.posts.init),
    t.query(sql.categories.init),
    t.query(sql.products.init)
  ]);
})
.then(() => {
  console.log('Success... The database has been seeded.');
})
.catch((error) => {
  console.log('Fail... There was an error with dbSeed.', error);
});
