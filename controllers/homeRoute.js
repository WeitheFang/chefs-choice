const router = require('express').Router();
const { Tag, User, Recipe, Ingredients } = require('../models');
const withAuth = require('../utils/auth');

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
        // const userData = await User.findByPk(req.session.user_id, {
        //     attributes: { exclude: ['password'] },
        //     include: [{ model: Recipe }],
        // });
        // const user = userData.get({ plain: true });
        const TagData = await Tag.findAll({
            attributes: ['tag', 'id'],
        });
        const tags = TagData.map((tag) => tag.get({ plain: true }));
        res.render('addRecipe', {
            // ...user,
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
        console.log(err);
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
            console.log(user);

            return recipe.get({ plain: true });
        });
        console.log(recipes);
        console.log(user);
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
module.exports = router;
