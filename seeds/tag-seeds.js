const { Tag } = require('../models');

const tagData = [
  {
    tag: 'Breakfast',
    tag_image: '',
  },
  {
    tag: 'Lunch',
    tag_image: '',
  },
  {
    tag: 'Dinner',
    tag_image: '',
  },
  {
    tag: 'Dessert',
    tag_image: '',
  },
  {
    tag: 'Snack',
    tag_image: '',
  },
  {
    tag: 'Vegan',
    tag_image: '',
  },
  {
    tag: 'Bakery',
    tag_image: '',
  },
  {
    tag: 'Fast Food',
    tag_image: '',
  },
  {
    tag: 'Vegetarian',
    tag_image: '',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;