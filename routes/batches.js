

const getBatch = require("../controller/batch/getBatch");
const getBatches = require("../controller/batch/getBatches");
const authenticate = require("../utils/authenticate");

const router = require("express").Router();

router.get("/", authenticate, getBatches);

router.get("/single/:batchId", authenticate, getBatch);

module.exports = router;
