const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const postsResolver = () => {
  console.log(5);
  return db.any(sql.posts.getAll)
    .then(posts => posts.map((post) => {
      post.owner = post.username;
      return post;
    }))
    .catch(error => error);
};

module.exports = postsResolver;
