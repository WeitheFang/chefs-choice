const router = require('express').Router();
const { Tag, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const TagData = await Tag.findAll({
            include: [
                { model: User, attributes: ['user_name'] },
                { model: Tag },
            ],
        });
        const tags = TagData.map((tag) => tag.get({ plain: true }));
        res.render('homepage', {
            tags,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});
module.exports = router;
