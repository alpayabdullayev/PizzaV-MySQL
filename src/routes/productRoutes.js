const express = require("express");
const {
  getAllProducts,
  deleteProduct,
  getProductById,
} = require("../controllers/productController");

const ProductRouter = express.Router();

ProductRouter.get("/products", getAllProducts);
ProductRouter.get("/product/:id", getProductById);
ProductRouter.delete("product/:id", deleteProduct);

module.exports = { ProductRouter };
