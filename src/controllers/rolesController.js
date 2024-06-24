const db = require("../config/db");
const { findAll } = require("../services/dbServices");

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
    const data = await findAll('roles');
    res.status(200).json({
      status: true,
      message: "Roles retrieved successfully",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {createRoles,getAllRoles}
