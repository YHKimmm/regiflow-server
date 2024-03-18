const { Router } = require("express");
const controller = require("../controllers/controller.js");

const router = Router();

router.get("/:id", controller.retrieveUser);

module.exports = router;