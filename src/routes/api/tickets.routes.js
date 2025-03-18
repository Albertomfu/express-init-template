const router = require("express").Router();

const { create, getAll } = require("../../controllers/tickets.controller");

router.get("/", getAll);
router.post("/", create);

module.exports = router;
