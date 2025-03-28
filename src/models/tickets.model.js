const db = require("../config/db");

//Aqui solo vamos a tener funciones que lancen queries sobre la tabla tickets

// Recupera todos los tickets
const selectAll = async () => {
  const [result] = await db.query("select * from tickets");
  return result;
};

// Recuperar un ticket por su id
/**
 * Retrieves a ticket by its ID from the database.
 *
 * @async
 * @function selectById
 * @param {number} ticketId - The ID of the ticket to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the ticket object if found, or `null` if not found.
 *
 * @throws {Error} If there is a database query error.
 */
const selectById = async (ticketId) => {
  const [result] = await db.query("select * from tickets where id = ?", [
    ticketId,
  ]); // el segundo parametro es un array con los valores que se sustituyen en la query
  if (!result.length === 0) return null;
  return result[0];
};

const insert = async (title, description, created_by) => {
  const [result] = await db.query(
    "insert into tickets (title, description, created_by) values (?, ?, ?)",
    [title, description, created_by]
  );
  return result.insertId;
};

module.exports = {
  selectAll,
  selectById,
};
