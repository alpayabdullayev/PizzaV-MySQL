const db = require("../config/db");

const createCategory = async (req, res, next) => {
  const { category_name } = req.body;
  try {
    const data = await db.query("INSERT INTO categories (category_name) VALUES (?)", [
      category_name,
    ]);
    res.status(200).json({
      status: true,
      message: "Category created successfully",
      data: {
        category_name: category_name
      }
    });
  } catch (err) {
    next(err);
  }
};


const getAllCategory = async (req, res, next) => {
    try {
      const data = await db.query("SELECT * FROM categories");
      res.status(200).json({
        status: true,
        message: "Categories retrieved successfully",
        data : data[0],
      });
    } catch (err) {
      next(err);
    }
}


const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await db.query(`delete from categories where id=${id}`);
    res.status(200).json({
      status: true,
      message: "Category deleted",
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {createCategory,getAllCategory,deleteCategory};
