const jwt = require('jsonwebtoken');
const sql = require('../../db/sql/sql.js');
const db = require('../../db/dbConnection.js');
const secret = require('../../jwtConfigVars.json').secret || process.env.JWT_SECRET;


const authenticateHandler = async (req, res) => {

  let user;

  try {

    user = await db.one(sql.users.authenticate, {
      username: req.body.credentials.username,
      password: req.body.credentials.password
    });

  } catch (error) {

    if (error.constructor.name === 'QueryResultError') {
      res.status(401).json({
        error: 'User not found'
      });
    } else {
      res.status(400).json({
        error: {
          error: error,
          message: error.message
        }
      });
    }

  }

  const newJWT = jwt.sign({
    username: user.username,
    id: user.id
  },
    secret
  );

  res.status(200).json(newJWT);

};


module.exports = authenticateHandler;
