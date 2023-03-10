const router = require('express').Router();
const { Tag, User, Recipe, Ingredients } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const TagData = await Tag.findAll();
        const tags = TagData.map((tag) => tag.get({ plain: true }));
        res.render('homepage', {
            tags,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/addRecipe', async (req, res) => {
    try {
        const TagData = await Tag.findAll({
            attributes: ['tag', 'id'],
        });
        const tags = TagData.map((tag) => tag.get({ plain: true }));
        res.render('addRecipe', {
            tags,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tag/:id', async (req, res) => {
    try {
        const TagData = await Tag.findByPk(req.params.id, {
            include: {
                model: Recipe,
                include: { model: User, attributes: [`user_name`] },
            },
        });
        const tag = TagData.get({ plain: true });
        res.render('tag', {
            ...tag,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/recipe/:id', async (req, res) => {
    try {
        const RecipeData = await Recipe.findByPk(req.params.id, {
            include: {
                model: User,
                attributes: [`user_name`],
            },
        });
        const recipe = RecipeData.get({ plain: true });
        const IngredientData = await Ingredients.findAll({
            where: {
                recipe_id: req.params.id,
            },
            attributes: [
                [`ingredient_name`, 'name'],
                [`ingredient_quantity`, 'quantity'],
            ],
        });
        const ingredients = IngredientData.map((ingredient) =>
            ingredient.get({ plain: true })
        );

        res.render('recipe', {
            ...recipe,
            ingredients,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: {
                model: User,
                attributes: ['user_name', 'is_Admin'],
            },
        });
        let user;
        const recipes = recipeData.map((recipe) => {
            user = recipe.user.get({ plain: true });

            return recipe.get({ plain: true });
        });

        res.render('profile', {
            recipes,
            user,
            logged_in: true,
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

router.get('/search/:search', async (req, res) => {
    try {
        const search = req.params.search;
        const recipeData = await Recipe.findAll({
            where: {
                recipe_name: {
                    [Op.like]: '%' + search + '%',
                },
            },
            include: {
                model: User,
                attributes: [`user_name`],
            },
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        res.render('tag', {
            search,
            recipes,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
