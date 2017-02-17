const db = require('../../db/dbConnection.js');
const sql = require('../../db/sql/sql.js');

module.exports = {

  addPost: (req, res) => {

    db.query(sql.post.add, {
      owner: req.body.owner,
      title: req.body.title,
      content: req.body.content
    })
    .then(() => {
      console.log(req.body.owner + ' created a post.');
      res.status(201).json('Your post was succesfully created.');
    })
    .catch((error) => {
      console.log('Failed to add post to the database.', error);
      res.status(400).json({
        error: 'Your post was not created',
        errorDetail: error.detail,
        errorCode: error.code
      });
    });
  },

  getPost: (req, res) => {
    db.query(sql.post.get, {
      
    })
  }

};
