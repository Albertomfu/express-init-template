const Ticket = require("../models/tickets.model");

// para obtener todos los tickets
const getAll = async (req, res, next) => {
  try {
    const tickets = await Ticket.selectAll();
    res.json(tickets);
  } catch (error) {
    next(error);
  }
};

// para obtener un ticket por id
const getById = async (req, res, next) => {
  try {
    const { ticketId } = await req.params;
    const ticket = await Ticket.selectById(ticketId);
    if (!ticket) {
      res.status(404).json({ error: "No existe ningun ticket con ese ID" });
      return;
    }
    res.json({ ticket });
  } catch (error) {
    next(error);
  }
};

const create = (req, res, next) => {};

module.exports = {
  getAll,
  getById,
  create,
};
