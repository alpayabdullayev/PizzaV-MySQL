const express = require("express");



const verifyToken = require("../../middleware/verifyToken");
const checkRole = require("../../middleware/checkRole");
const { createCategory, getAllCategory, deleteCategory } = require("../../controllers/categoryController");

const CategoryRoutes = express.Router();

CategoryRoutes.post("/create-category", verifyToken,checkRole(1),createCategory);
CategoryRoutes.get("/categories",getAllCategory)
CategoryRoutes.delete("/category/:id",deleteCategory)

module.exports = { CategoryRoutes };
