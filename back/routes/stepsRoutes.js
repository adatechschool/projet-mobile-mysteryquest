const express = require("express");
const router = express.Router();
const stepsController = require("../controllers/stepsController");

router.get("/getAllSteps", stepsController.getAllSteps);
router.get("/getSingleStep/:questId/:stepNumber", stepsController.getSingleStep);

module.exports = router;
