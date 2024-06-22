const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: false,
      message: "You are not authenticated!"
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: false,
      message: "You are not authenticated!"
    });
  }

  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decodedToken) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.status(403).json({
        status: false,
        message: "Token is not valid!"
      });
    }

    req.user = {
      userId: decodedToken.userId, 
      role: decodedToken.role,
    };
    console.log("Verified middleware", req.user);
    next();
  });
};

module.exports = verifyToken;
