const { Model } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeTag extends Model {}

RecipeTag.init(
    {},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe_tag',
    }
);
