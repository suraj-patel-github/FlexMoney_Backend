

const getBatches = require("../controller/batch/getBatches");
const authenticate = require("../utils/authenticate");

const router = require("express").Router();

router.get("/", authenticate, getBatches);

module.exports = router;
