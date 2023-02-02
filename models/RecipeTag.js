const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeTag extends Model {}

RecipeTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
        },
        tag_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe_tag',
    }
);
module.exports = RecipeTag;
