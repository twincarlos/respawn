const express = require('express');

const db = require('../db/models');
const { User, Game, Gameshelf } = db;
const { csrf, csrfProtection, asyncHandler } = require('../utils');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('../auth');
const bcrypt = require('bcryptjs')

const router = express.Router();

const userValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for First Name')
        .isLength({ max: 50 })
        .withMessage('First Name must not be more than 50 characters long'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
        .isLength({ max: 50 })
        .withMessage('Password must not be more than 50 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .isLength({ max: 50 })
        .withMessage('Confirm Password must not be more than 50 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
];

// GET SIGNUP
router.get('/signup', csrfProtection, async (req, res) => {
    res.render('user-signup', { csrfToken: req.csrfToken() });
});

// POST SIGNUP
router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    let { profile } = req.body;
    if (!profile) profile = 'https://image.pngaaa.com/991/593991-middle.png';

    const user = User.build({ username, profile });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        user.hashedPassword = hashedPassword;
        await user.save();
        loginUser(req, res, user);
        res.redirect('/');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('user-signup', {
            errors,
            csrfToken: req.csrfToken(),
            username,
            password: '',
            confirmPassword: '',
            profile
        });
    }
}));

// GET LOGIN
router.get('/login', csrfProtection, (req, res) => {
    res.render('user-login', { csrfToken: req.csrfToken() });
});

// POST LOGIN
router.post('/login', csrfProtection, asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    const errors = [];

    if (user) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
        if (passwordMatch) {
            loginUser(req, res, user);
            return res.redirect('/');
        } else {
            errors.push('Invalid credentials.');
        }
    } else {
        errors.push('Invalid credentials.');
    }

    res.render('user-login', { errors, csrfToken: req.csrfToken(), username: '', password: '', confirmPassword: '', profile: '' });
}));

// LOGIN DEMO
router.get('/demo', async (req, res) => {
    const user = await User.findByPk(1);
    loginUser(req, res, user);
    return res.redirect('/');
});

// LOGOUT
router.get('/logout', (req, res) => {
    logoutUser(req, res);
    res.redirect('/');
});

// GET USER PROFILE
router.get('/:id(\\d+)', async(req, res) => {
    // profile to visit
    const profileId = parseInt(req.params.id, 10);
    const profile = await User.findByPk(profileId);

    // logged in user
    const loggedIn = req.session.auth;
    const user = loggedIn ? (await User.findByPk(loggedIn.userId)) : null;

    const gameshelves = await Gameshelf.findAll({ where: { userId: profileId } });
    const games = await Game.findAll({ where: { userId: profileId } });

    res.render('user-profile', { profile, user, gameshelves, games });
});

module.exports = router;
