const express = require('express');

const db = require('../db/models');
const { User } = db;

const router = express.Router();

router.get('/', async(req, res) => {
  const loggedIn = req.session.auth;
  const user = loggedIn ? (await User.findByPk(loggedIn.userId)) : null;
  
  res.render('nav', { user });
});

module.exports = router;
