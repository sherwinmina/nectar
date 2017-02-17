const db = require('./dbConnection.js');
const sql = require('./sql/sql.js');


db.tx((t) => {
  return t.query(sql.extensions.create)
  .then(() => {
    return t.query(sql.users.create);
  })
  .then(() => {
    return t.query(sql.posts.create);
  });
})
.then(() => {
  console.log('Success...the database was created.');
})
.catch((error) => {
  console.log('Fail...The database was not created.', error);
});
