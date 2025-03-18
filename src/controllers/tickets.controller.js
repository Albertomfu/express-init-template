const getAll = (req, res, next) => {
  res.json("getAll");
}; // para obtener todos los tickets
const create = (req, res, next) => {
  res.json("create");
}; // para crear un ticket

module.exports = {
  getAll,
  create,
};
