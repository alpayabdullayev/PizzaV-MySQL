const db = require("../config/db");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  const { username, password, role_id } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const data = await db.query(
      "INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)",
      [username, hashedPassword, role_id]
    );

    res.status(200).json({
      status: true,
      message: "User created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const data = await db.query("SELECT * FROM users");

    res.status(200).json({
      status: true,
      message: "All users",
      data: data[0],
    });
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    const data = await db.query(`SELECT * FROM users where id =${id}`);

    res.status(200).json({
      status: true,
      message: "users found",
      data: data[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser, getAllUser, getUserById };
