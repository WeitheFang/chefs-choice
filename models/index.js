const User = require('./User');
const Comment = require('./Comment');
const Recipe = require('./Recipe');
const Tag = require('./Tag');
const Ingredients = require('./Ingredients');
const RecipeTag = require('./RecipeTag');

User.hasMany(Recipe, {
    foreignKey: 'user_id',
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
});

Recipe.hasMany(Ingredients, {
    foreignKey: 'recipe_id',
});
Ingredients.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});
Recipe.belongsToMany(Tag, { through: 'recipe_tag' });
Tag.belongsToMany(Recipe, { through: 'recipe_tag' });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

module.exports = { User, Comment, Recipe, Tag, RecipeTag, Ingredients };
