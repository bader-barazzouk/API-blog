var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
/* GET the ordered and paginated list of users */
router.get('/', async function(req, res, next) {
  const  page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  res.send(await  usersRepo.getUsers(offset,limit))
});

module.exports = router;
