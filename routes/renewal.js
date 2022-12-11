const express = require("express");
const authenticate = require("../utils/authenticate");
const router = express.Router();

const payment = require("../controller/renewal/payment");
const selectBatch = require("../controller/renewal/selectBatch");
const checkSubscription = require("../controller/renewal/checkSubscription");


router.post("/", authenticate, payment);

router.post("/selectBatch", authenticate, selectBatch);

router.get("/checkSubscription", authenticate, checkSubscription);

module.exports = router;
