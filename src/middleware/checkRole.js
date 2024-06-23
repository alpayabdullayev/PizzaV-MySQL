const checkRole = (roleId) => {
    return (req, res, next) => {
      if (req.user && req.user.role === roleId) {
        next();
      } else {
        res.status(403).json({
          status: false,
          message: "You do not have the necessary permissions to perform this action.",
        });
      }
    };
  };
  
  module.exports = checkRole;
  