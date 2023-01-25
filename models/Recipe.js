const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preparation_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recipe_directions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
      },
    comment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'comment',
            key: 'id',
        },
      },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tag',
            key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;