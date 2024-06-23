const db = require("../config/db");

// const getAllProducts = async (req, res, next) => {
//   try {
//     const data = await  db.query("select * from products")
//     if (!data) {
//       res.status(404).json({
//         status: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       status: true,
//       message: "Products retrieved successfully",
//       data: data[0],  
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const createProduct = async (req, res, next) => {
//   const { name, price, description } = req.body;
//   try {
//     const data = await db.query(
//       `INSERT INTO products (name, price, description) VALUES ('${name}', ${price}, '${description}')`
//     );
//     res.status(200).json({
//       status: true,
//       message: "Product created successfully",
//       data,
//     });
//   } catch (err) {
//     next(err);
//   }
// };



// const updateProduct = async (req, res, next) => {
//   const { id } = req.params;
//   const { name, price, description } = req.body;
//   try {
//     const data = await db.query(
//       `UPDATE products SET name='${name}', price=${price}, description='${description}' WHERE id=${id}`
//     );
//     res.status(200).json({
//       status: true,
//       message: "Product updated successfully",
//       data,
//     });
//   } catch (err) {
//     next(err);
//   }
// }


// // const createProduct = async (req, res, next) => {
// //   const { name, price, description } = req.body; 
// //   try {
// //     const data = await db.query(
// //       'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
// //       [name, price, description]
// //     );
// //     res.status(200).json({
// //       status: true,
// //       message: "Product created successfully",
// //       data,
// //     });
// //   } catch (err) {
// //     next(err);
// //   }
// // };



// // const updateProduct = async (req, res, next) => {
// //   const { id, name, price, description } = req.body; 
// //   try {
// //     const data = await db.query(
// //       'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
// //       [name, price, description, id]
// //     );
// //     res.status(200).json({
// //       status: true,
// //       message: "Product updated successfully",
// //       data,
// //     });
// //   } catch (err) {
// //     next(err);
// //   }
// // };

// const getProductById = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const data = await db.query(`select * from products where id=${id}`);
//     if (!data) {
//       res.status(404).json({
//         status: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       message: "Products retrieved successfully",
//       data: data[0],
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const deleteProduct = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const data = await db.query(`delete from products where id=${id}`);
//     res.status(200).json({
//       status: true,
//       message: "Product deleted",
//       data,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = { getAllProducts, deleteProduct, getProductById,createProduct,updateProduct };


const createProduct = async (req, res, next) => {
  const { name, category_id, description } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const data = await db.query(
      "INSERT INTO task_products (name, category_id, description, image) VALUES (?, ?, ?, ?)",
      [name, category_id, description, image]
    );
    res.status(201).json({
      status: true,
      message: "Product created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const data = await  db.query("select * from task_products")
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

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await db.query(`delete from task_products where id=${id}`);
    res.status(200).json({
      status: true,
      message: "Product deleted",
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {createProduct,getAllProducts,deleteProduct}