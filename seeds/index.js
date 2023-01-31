const seedComments = require('./comment-seeds');
const seedRecipes = require('./recipe-seeds');
const seedTags = require('./tag-seeds');
const seedUsers = require('./user-seeds');
const seedIngredients = require('./ingredient-seeds');
const seedRecipeTag = require('./recipe-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedRecipes();
    console.log('\n----- RECIPES SEEDED -----\n');

    await seedIngredients();
    console.log('\n----- INGREDIENTS SEEDED -----\n');

    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    await seedRecipeTag();
    console.log('\n----- RECIPE TAGS SEEDED -----\n');

    process.exit(0);
};

seedAll();
