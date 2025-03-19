const router = require("express").Router();

const {
  create,
  getAll,
  getById,
} = require("../../controllers/tickets.controller");

router.get("/", getAll);
router.get("/:ticketId", getById);
router.post("/", create);

module.exports = router;
