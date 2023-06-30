const express = require("express");
const { handleSignup, handleLogin } = require("../controllers/users");
const   router = express.Router();

const auth = require('../middleware/auth');

//router.post("/signup", auth.authenticate(), handleSignup);
router.post("/signup", handleSignup);
router.post("/login", handleLogin);

module.exports = router;