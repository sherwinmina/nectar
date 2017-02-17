const sql = require('../../db/sql/sql.js');
const db = require('../../db/dbConnection.js');


module.exports = {

  addUser: (req, res) => {

    db.one(sql.users.add, {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    })
    .then((username) => {
      console.log('Successfully added user ' + username.username + ' to the database.');
      res.status(201).json('You have been added to the database.');
    })
    .catch((error) => {
      console.log('Failed to add user ' + req.body.username + ' to the database.', error);
      res.status(400).json({
        error: 'Failed to add user ' + req.body.username + ' to the database.',
        errorCode: error.code,
        errorDetail: error.detail
      });
    });

  },

  getUser: (req, res) => {

    db.one(sql.users.get, {
      username: req.query.username
    })
    .then((user) => {
      console.log(user, ' was retrieved from the database.');
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error, ' user ' + req.query.username + ' was not found in the database.');
      res.status(404).json({
        error: error.message,
        errorCode: error.code
      });
    });

  }
};
