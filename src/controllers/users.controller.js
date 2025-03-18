const User = require("../models/users.model");

const register = async (req, res, next) => {
  // los datos del nuevo user estan en req.body
  try {
    const result = await User.insert(req.body);
    const user = await User.selectById(result.insertId);
    // se devuelve el user recien creado
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
};
