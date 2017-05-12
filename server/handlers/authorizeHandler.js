const jwt = require('jsonwebtoken');
const secret = require('../../jwtConfigVars.json').secret || process.env.JWT_SECRET;


const authorizeHandler = (req, res) => {

  let user;

  try {
    user = jwt.verify(req.headers.bearer, secret);
  } catch (error) {
    res.status(401).json({
      error: error
    });
    return;
  }

  res.status(200).json({
    user: {
      username: user.username,
      userId: user.id
    }
  });

};

module.exports = authorizeHandler;
