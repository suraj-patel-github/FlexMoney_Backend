const login = require("../controller/login/login");

const router = require("express").Router();

router.post("/", login);

module.exports = router;


