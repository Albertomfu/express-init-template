const db = require("../config/db");

const selectById = async (userId) => {
  const [result] = await db.query("select * from users where id = ?", [userId]);
  if (result.length === 0) return null;

  return result[0];
};

const insert = async ({ name, email, password, role }) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, role]
  );
  return result;
};

module.exports = {
  insert,
  selectById,
};
