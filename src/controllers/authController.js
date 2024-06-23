const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/generate-token");

const register = async (req, res, next) => {
  const { username, password, role_id } = req.body;

  try {
    if (!username || !password || !role_id) {
      return res.status(400).json({
        status: false,
        message: "Please provide username, password, and role_id",
      });
    }

    const [existingUser] = await db.query(
      "SELECT id FROM users WHERE username = ?",
      [username]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        status: false,
        message: "Username already exists",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [data] = await db.query(
      "INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)",
      [username, hashedPassword, role_id]
    );

    res.status(201).json({
      status: true,
      message: "User created successfully",
      data: {
        id: data.insertId,
        username,
        role_id,
      },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide username and password",
      });
    }

    const [data] = await db.query("SELECT * FROM users WHERE username = ?", [username]);

    if (data.length === 0) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    const user = data[0];

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid password",
      });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      data: {
        id: user.id,
        username: user.username,
        role_id: user.role_id,
        accessToken,
        refreshToken,
      },
    });
  } catch (err) {
    next(err);
  }
};


module.exports = { login, register };
