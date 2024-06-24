const db = require("../config/db");
const bcrypt = require("bcrypt");
const { findAll, findById } = require("../services/dbServices");

const createUser = async (req, res, next) => {
  const { username, password, role_id } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const data = await db.query(
      "INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)",
      [username, hashedPassword, role_id]
    );

    res.status(200).json({
      status: true,
      message: "User created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const data = await findAll("users");

    res.status(200).json({
      status: true,
      message: "All users",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    const data = await findById("users", id);

    res.status(200).json({
      status: true,
      message: "User found",
      data,
    });
  } catch (err) {
    next(err);
  }
};

// const addToBasket = async (req, res, next) => {
//   const { product_id, size_id, price, quantity } = req.body;
//   const {userId} = req.user; 

//   try {
//     if (!product_id || !price || !quantity) {
//       return res.status(400).json({
//         status: false,
//         message: "Product ID, price, and quantity are required",
//       });
//     }

//     const basketItem = {
//       user_id: userId,
//       product_id: product_id,
//       size_id: size_id || null, 
//       price: price,
//       quantity: quantity,
//     };

//     const result = await db.query("INSERT INTO basket SET ?", [basketItem]);

//     res.status(201).json({
//       status: true,
//       message: "Product added to basket successfully",
//       data: {
//         basketItemId: result.insertId, 
//         user_id: userId,
//         product_id: product_id,
//         size_id: size_id || null,
//         price: price,
//         quantity: quantity,
//       },
//     });
//   } catch (err) {
//     console.error("Error adding product to basket:", err);
//     next(err);
//   }
// };




module.exports = { createUser, getAllUser, getUserById };
