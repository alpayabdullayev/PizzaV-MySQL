const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      role: user.role_id,
    },
    process.env.ACCESS_SECRET_TOKEN,
    {
      expiresIn: '1h' 
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      role: user.role_id,
    },
    process.env.REFRESH_SECRET_TOKEN,
    {
      expiresIn: '30d' 
    }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
