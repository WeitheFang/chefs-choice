const { Tag } = require('../models');

const tagData = [
  {
    tag: 'Breakfast',
  },
  {
    tag: 'Lunch',
  },
  {
    tag: 'Dinner',
  },
  {
    tag: 'Dessert',
  },
  {
    tag: 'Snack',
  },
  {
    tag: 'Vegan',
  },
  {
    tag: 'Bakery',
  },
  {
    tag: 'Fast Food',
  },
  {
    tag: 'Vegetarian',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;