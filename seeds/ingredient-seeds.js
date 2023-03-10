const { Ingredients } = require('../models');

const ingredientData = [
    {
        ingredient_name: 'olive oil',
        ingredient_quantity: '1 tablespoon',
        recipe_id: 1,
    },
    { ingredient_name: 'large eggs', ingredient_quantity: '2', recipe_id: 1 },
    {
        ingredient_name: 'salt and ground black pepper (to taste)',
        ingredient_quantity: 'a pinch',
        recipe_id: 1,
    },
    {
        ingredient_name: 'butter, softened',
        ingredient_quantity: '1 tablespoon',
        recipe_id: 1,
    },
    {
        ingredient_name: 'Italian bread',
        ingredient_quantity: '2 slices',
        recipe_id: 1,
    },
    {
        ingredient_name: 'swiss cheese, sliced',
        ingredient_quantity: '1 ounce',
        recipe_id: 1,
    },
    {
        ingredient_name: 'cheddar cheese, sliced',
        ingredient_quantity: '1 ounce',
        recipe_id: 1,
    },
    {
        ingredient_name: 'ripe avocado, sliced',
        ingredient_quantity: '½ ',
        recipe_id: 1,
    },
    {
        ingredient_name: 'olive oil',
        ingredient_quantity: '1 tablespoon',
        recipe_id: 2,
    },
    {
        ingredient_name:
            'skinless, boneless chicken thighs (cut into small pieces)',
        ingredient_quantity: '4',
        recipe_id: 2,
    },
    {
        ingredient_name: 'onion (cut in half and sliced)',
        ingredient_quantity: '1',
        recipe_id: 2,
    },
    {
        ingredient_name: 'ashi stock (made with dashi powder)',
        ingredient_quantity: '2 cups',
        recipe_id: 2,
    },
    {
        ingredient_name: 'soy sauce',
        ingredient_quantity: ' ¼ cup',
        recipe_id: 2,
    },
    {
        ingredient_name: 'mirin (Japanese rice wine)',
        ingredient_quantity: '3 tablespoons',
        recipe_id: 2,
    },
    { ingredient_name: 'large eggs', ingredient_quantity: '4', recipe_id: 2 },
    {
        ingredient_name: 'brown sugar',
        ingredient_quantity: '3 tablespoons',
        recipe_id: 2,
    },
    {
        ingredient_name: 'hot cooked white rice',
        ingredient_quantity: '4 cups',
        recipe_id: 2,
    },
    {
        ingredient_name: 'large eggs, separated',
        ingredient_quantity: '4',
        recipe_id: 3,
    },
    {
        ingredient_name: 'dark roast coffee',
        ingredient_quantity: '2 ½ teaspoons',
        recipe_id: 3,
    },
    {
        ingredient_name: 'white sugar',
        ingredient_quantity: '½ cup',
        recipe_id: 3,
    },
    {
        ingredient_name: 'marsala wine',
        ingredient_quantity: '1 tablespoon',
        recipe_id: 3,
    },
    { ingredient_name: 'salt', ingredient_quantity: '¼ pinch ', recipe_id: 3 },
    {
        ingredient_name: 'heavy cream',
        ingredient_quantity: '1 ¼ cups',
        recipe_id: 3,
    },
    {
        ingredient_name: 'round Brie cheese',
        ingredient_quantity: '1 (8 ounce)',
        recipe_id: 4,
    },
    {
        ingredient_name: 'package phyllo dough, thawed',
        ingredient_quantity: '1 (8 ounce)',
        recipe_id: 4,
    },
    {
        ingredient_name: 'rasberry jam',
        ingredient_quantity: '1 cup',
        recipe_id: 4,
    },
    {
        ingredient_name: 'melted butter',
        ingredient_quantity: '1 cup',
        recipe_id: 4,
    },
    {
        ingredient_name: 'honey',
        ingredient_quantity: '2 tablespoons',
        recipe_id: 4,
    },
    {
        ingredient_name: 'flakey salt (to taste)',
        ingredient_quantity: 'a pinch',
        recipe_id: 4,
    },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientData);

module.exports = seedIngredients;
