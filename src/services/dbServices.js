const db = require("../config/db");

const findAll = async (tableName, query = `SELECT * FROM ${tableName}`) => {
  try {
    const [results] = await db.query(query);

    if (results.length === 0) {
      return { message: "No results found" };
    }
    return results;
  } catch (error) {
    throw new Error(
      `Failed to retrieve data from ${tableName}: ${error.message}`
    );
  }
};

const findById = async (tableName, id) => {
  try {
    const [findByIdMethod] = await db.query(
      `SELECT * FROM ${tableName} WHERE id = ?`,
      [id]
    );
    if (findByIdMethod.length === 0) {
      return { message: `Data with ID ${id} not found in ${tableName}` };
    }
    return findByIdMethod[0];
  } catch (error) {
    throw new Error(
      `Failed to find ${tableName} by ID ${id}: ${error.message}`
    );
  }
};

const remove = async (tableName, id) => {
  try {
    const [result] = await db.query(`DELETE FROM ${tableName} WHERE id = ?`, [
      id,
    ]);
    return result;
  } catch (error) {
    throw new Error(
      `Failed to delete data from ${tableName}: ${error.message}`
    );
  }
};

module.exports = {
  findAll,
  findById,
  remove,
};
