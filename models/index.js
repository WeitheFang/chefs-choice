const User = require('./User');
const Comment = require('./Comment');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
foreignKey: 'user_id',
});

Recipe.belongsTo(User, {
foreignKey: 'user_id',
});

Recipe.hasMany(Comment, {
foreignKey: 'comment_id',
});
  
Comment.belongsTo(User, {
foreignKey: 'user_id',
});

Comment.belongsTo(Recipe, {
foreignKey: 'recipe_id',
});

module.exports = { User, Comment, Recipe };