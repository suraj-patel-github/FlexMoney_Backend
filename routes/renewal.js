const express = require("express");
const authenticate = require("../utils/authenticate");
const router = express.Router();

const payment = require("../controller/renewal/payment");
const selectBatch = require("../controller/renewal/selectBatch");


router.post("/", authenticate, payment);

router.post("/selectBatch", authenticate, selectBatch);

module.exports = router;
