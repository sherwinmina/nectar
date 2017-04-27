const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const postsResolver = () => {
  return (async function() {
    let posts;
    try {
      posts = await db.any(sql.posts.getAll);
    } catch (error) {
      posts = error;
    }
    const resolvedPosts = posts.map(post => {
      post.owner = post.username;
      return post;
    });
    return resolvedPosts;
  })();
};

module.exports = postsResolver;
