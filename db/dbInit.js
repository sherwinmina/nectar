const db = require('./dbConnection.js');
const sql = require('./sql/sql.js');


db.tx((t) => {

  return t.batch([
    t.query(sql.extensions.create),
    t.query(sql.users.create),
    t.query(sql.posts.create),
    t.query(sql.categories.create),
    t.query(sql.products.create)
  ]);
})
.then(() => {
  console.log('Success...the database was created.');
})
.catch((error) => {
  console.log('Fail...The database was not created.', error);
});
