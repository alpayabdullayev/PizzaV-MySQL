const express = require("express");
const { login, register } = require("../../controllers/authController");

const AuthRoutes = express.Router();

AuthRoutes.post("/login", login);
AuthRoutes.post("/register", register);

module.exports = { AuthRoutes };
