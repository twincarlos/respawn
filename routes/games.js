const express = require('express');

const db = require('../db/models');
const { User, Game } = db;
const { csrf, csrfProtection, asyncHandler } = require('../utils');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const gameValidator = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your game.')
        .custom(async (name) => {
            const game = await Game.findOne({ where: { name } })
            if (game) throw new Error('This game already exists.')
        }),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description')
];

// GET ALL GAMES
router.get('/', async(req, res) => {
    let gamesObj = {};

    for (let i = 2; i < 6; i++) {
        const user = await User.findByPk(i);
        const games = await Game.findAll({ where: { userId: i }, limit: 3 });

        gamesObj[user.username] = games;
    }

    res.render('all-games', { gamesObj });
});

// GET ADD GAME
router.get('/add', csrfProtection, (req, res) => {
    res.render('add-game', { csrfToken: req.csrfToken(), name: '', description: '', image: '' });
});

// POST ADD GAME
router.post('/add', csrfProtection, gameValidator, asyncHandler( async ( req, res ) => {
    let { name, description, image } = req.body;
    if (!image) image = 'https://itchronicles.com/wp-content/uploads/2021/04/Optimized-Illustration-from-Adobe-Stock-for-ITC-Post-on-AI-in-Game-Development-1024x576.jpeg';

    const game = await Game.build({
        userId: 1,
        name,
        description,
        overallRating: 0.00,
        image
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await game.save();
        res.redirect('/games');
    } else {
        const errors = validatorErrors.array().map(error => error.msg);
        res.render('add-game', {
            errors,
            csrfToken: req.csrfToken(),
            name,
            description,
            image
        });
    }
}));

// GET SPECIFIC GAME
router.get('/:id(\\d+)', async(req, res) => {
    const gameId = req.params.id;
    const game = await Game.findByPk(gameId);
    const developer = await User.findByPk(game.userId)

    res.render('single-game', { game, developer });
});

module.exports = router;
