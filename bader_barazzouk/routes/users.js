var express = require('express');
var router = express.Router();
const userRepos = require("../repositories/users")
/* GET users listing. */
router.get('/',async function(req, res, next) {
  res.send(await userRepos.getAllUsers())
});

module.exports = router;
