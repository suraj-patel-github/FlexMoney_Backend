const express = require("express");
const router = express.Router();

const createrUser = require("../controller/user/createUser");
const getUser = require("../controller/user/getUser");
const authenticate = require("../utils/authenticate");

router.post("/", createrUser);

router.get("/", authenticate, getUser);

module.exports = router;

