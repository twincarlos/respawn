const express = require('express');

const db = require('../db/models');
const { User, Game } = db;
const { csrf, csrfProtection, asyncHandler } = require('../utils');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// GET LOGIN
router.get('/login', csrfProtection, (req, res) => {
    res.render('user-login', { csrfToken: req.csrfToken(), username: '', password: '', confirmPassword: '', profile: '' });
});

module.exports = router;
