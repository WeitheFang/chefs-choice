const router = require('express').Router();
const { Recipe, RecipeTag, Ingredients } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        console.log(
            '_________________________________________________________'
        );
        console.log(req.body);
        console.log(
            '_________________________________________________________'
        );
        const {
            recipe_name,
            recipe_directions,
            preparation_time,
            difficulty,
            tag_id,
            finalIngredients,
        } = req.body;
        const newRecipe = await Recipe.create({
            recipe_name,
            recipe_directions,
            preparation_time,
            difficulty,
            user_id: req.session.user_id,
        });
        console.log(newRecipe.dataValues);
        const recipe_id = newRecipe.dataValues.id;
        console.log(recipe_id);
        tag_id.forEach(async (tag) => {
            console.log(tag);
            await RecipeTag.create({
                recipe_id: recipe_id,
                tag_id: tag,
            });
        });
        finalIngredients.forEach(async (ingredient) => {
            await Ingredients.create({
                ingredient_name: ingredient.ingredient,
                ingredient_quantity: ingredient.quantity,
                recipe_id,
            });
        });
        res.status(200).json(newRecipe);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!recipeData) {
            res.status(404).json({ message: 'No recipe found with this id!' });
            return;
        }
        res.status(200).json(recipeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
