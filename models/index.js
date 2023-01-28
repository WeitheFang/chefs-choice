const User = require('./User');
const Comment = require('./Comment');
const Recipe = require('./Recipe');
const Tag = require('./Tag');

User.hasMany(Recipe, {
    foreignKey: 'user_id',
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
});

Recipe.hasMany(Tag, {
    foreignKey: 'recipe_id',
});

Tag.hasMany(Recipe, {
    foreignKey: 'tag_id',
});

Tag.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

module.exports = { User, Comment, Recipe, Tag };
