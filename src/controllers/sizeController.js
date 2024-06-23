const db = require("../config/db");


const createSize = async (req, res, next) => {
    const { name,slug,category_id } = req.body;
    try {
        if (!name ||!slug ||!category_id) {
          return res.status(400).json({
            status: false,
            message: "Please provide name, slug, and category_id",
          });
        }
      const data = await db.query(
        "INSERT INTO sizes (name,slug,category_id) VALUES (?,?,?)",
        [name,slug,category_id]
      );

      res.status(200).json({
        status: true,
        message: "Size created successfully",
        data,
      });
    } catch (err) {
      next(err);
    }
};

const getAllSize = async (req, res, next) => {
    try {

      const data = await db.query("SELECT * FROM sizes");
      res.status(200).json({
        status: true,
        message: "All sizes",
        data : data[0],
      });
    } catch (err) {
      next(err);
    }
}


module.exports = {createSize,getAllSize};