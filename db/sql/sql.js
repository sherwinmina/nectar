const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

const sql = (localFilePath) => {
  const fullPath = path.join(__dirname, localFilePath);
  return new QueryFile(fullPath, {minify: true});
};

module.exports = {
  extensions: {
    create: sql('/extensions.sql')
  },
  users: {
    create: sql('users/create.sql'),
    add: sql('users/add.sql'),
    get: sql('users/get.sql')
  },
  posts: {
    create: sql('posts/create.sql'),
    add: sql('posts/add.sql'),
    getAll: sql('posts/getAll.sql')
  }
};
