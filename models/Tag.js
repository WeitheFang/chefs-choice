const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tag_image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // recipe_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'recipe',
        //         key: 'id',
        //     },
        //   },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);

module.exports = Tag;
