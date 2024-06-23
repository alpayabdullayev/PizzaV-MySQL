const db = require("../config/db");

const createPrice = async (req, res, next) => {
  const { product_id, size_id, price } = req.body;
  try {
    if (!product_id || !size_id || !price) {
      return res.status(400).json({
        status: false,
        message: "Please provide product_id, size_id, and price",
      });
    }
    const data = await db.query(
      "INSERT INTO prices (product_id,size_id, price) VALUES (?,?,?)",
      [product_id, size_id , price]
    );
    res.status(200).json({
      status: true,
      message: "Price created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllPrice = async (req, res, next) => {
    try {
      const data = await db.query("SELECT * FROM prices");
      res.status(200).json({
        status: true,
        message: "All prices",
        data : data[0],
      });
    } catch (err) {
      next(err);
    }
}

module.exports = {
  createPrice,
  getAllPrice
};
