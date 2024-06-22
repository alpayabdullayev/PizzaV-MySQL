const db = require("../config/db");

const createRoles = async (req, res, next) => {
  const { name } = req.body;
  try {
    const data = await db.query(
      "INSERT INTO roles (name) VALUES (?)",
      [name]
    );
    res.status(200).json({
      status: true,
      message: "roles created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};


const getAllRoles = async (req, res, next) => {
    try {
      const data = await db.query("SELECT * FROM roles");
      res.status(200).json({
        status: true,
        message: "roles retrieved successfully",
        data : data[0],
      });
    } catch (err) {
      next(err);
    }
}

module.exports = {createRoles,getAllRoles}
