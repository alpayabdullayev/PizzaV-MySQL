const express = require("express");
const verifyToken = require("../../middleware/verifyToken");
const checkRole = require("../../middleware/checkRole");
const upload = require("../../helpers/upload");
const { createProduct, getAllProducts, deleteProduct } = require("../../controllers/productController");


const ProductRouter = express.Router();


ProductRouter.post("/create-product",verifyToken,checkRole(1),upload.single('image'), createProduct);
ProductRouter.get("/products",getAllProducts)
ProductRouter.delete("/product/:id",deleteProduct)

module.exports = { ProductRouter };
