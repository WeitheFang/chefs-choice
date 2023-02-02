const { Tag } = require('../models');

const tagData = [
    {
        tag: 'Breakfast',
        tag_image: '/images/tagImages/breakfast.webp',
    },
    {
        tag: 'Lunch',
        tag_image: '/images/tagImages/lunch.webp',
    },
    {
        tag: 'Dinner',
        tag_image: '/images/tagImages/dinner.webp',
    },
    {
        tag: 'Dessert',
        tag_image: '/images/tagImages/dessert.webp',
    },
    {
        tag: 'Snack',
        tag_image: '/images/tagImages/snack.webp',
    },
    {
        tag: 'Vegan',
        tag_image: '/images/tagImages/vegan.webp',
    },
    {
        tag: 'Bakery',
        tag_image: '/images/tagImages/bakery.webp',
    },
    {
        tag: 'Fast Food',
        tag_image: '/images/tagImages/fast_food.webp',
    },
    {
        tag: 'Vegetarian',
        tag_image: '/images/tagImages/vegetarian.webp',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
