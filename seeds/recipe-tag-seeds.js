const { RecipeTag } = require('../models');

const recipeTagData = [
    {
        recipe_id: 1,
        tag_id: 6,
    },
    {
        recipe_id: 1,
        tag_id: 7,
    },
    {
        recipe_id: 1,
        tag_id: 8,
    },
    {
        recipe_id: 2,
        tag_id: 6,
    },
    {
        recipe_id: 3,
        tag_id: 1,
    },
    {
        recipe_id: 3,
        tag_id: 3,
    },
    {
        recipe_id: 3,
        tag_id: 4,
    },
    {
        recipe_id: 3,
        tag_id: 5,
    },
    {
        recipe_id: 4,
        tag_id: 1,
    },
    {
        recipe_id: 4,
        tag_id: 2,
    },
    {
        recipe_id: 4,
        tag_id: 8,
    },
    {
        recipe_id: 5,
        tag_id: 3,
    },
];

const seedRecipeTag = () => RecipeTag.bulkCreate(recipeTagData);

module.exports = seedRecipeTag;
