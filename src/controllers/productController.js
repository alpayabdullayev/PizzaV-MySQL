const db = require("../config/db");

const getAllProducts = async (req, res, next) => {
  try {
    const data = await db.query("select * from products");
    if (!data) {
      res.status(404).json({
        status: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Products retrieved successfully",
      data: data[0],
    });
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await db.query(`select * from products where id=${id}`);
    if (!data) {
      res.status(404).json({
        status: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Products retrieved successfully",
      data: data[0],
    });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await db.query(`delete from products where id=${id}`);
    res.status(200).json({
      status: true,
      message: "Product deleted",
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProducts, deleteProduct, getProductById };
