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
    authenticate: sql('users/authenticate.sql'),
    add: sql('users/add.sql'),
    get: sql('users/get.sql'),
    init: sql('users/init.sql')
  },
  posts: {
    create: sql('posts/create.sql'),
    add: sql('posts/add.sql'),
    getAll: sql('posts/getAll.sql'),
    init: sql('posts/init.sql')
  },
  products: {
    create: sql('products/create.sql'),
    getAll: sql('products/getAll.sql'),
    add: sql('products/add.sql'),
    init: sql('products/init.sql')
  },
  categories: {
    create: sql('categories/create.sql'),
    init: sql('categories/init.sql'),
    getAll: sql('categories/getAll.sql')
  }
};
