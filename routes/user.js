const express = require("express");
const router = express.Router();

const createrUser = require("../controller/user/createUser");

router.post("/", createrUser);

module.exports = router;

