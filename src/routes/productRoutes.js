const express = require("express");
const {
  getAllProducts,
  deleteProduct,
  getProductById,
  createProduct,
  updateProduct,
} = require("../controllers/productController");

const ProductRouter = express.Router();

ProductRouter.get("/products", getAllProducts);
ProductRouter.post("/product", createProduct);
ProductRouter.put("/product/:id", updateProduct);
ProductRouter.get("/product/:id", getProductById);
ProductRouter.delete("product/:id", deleteProduct);

module.exports = { ProductRouter };
