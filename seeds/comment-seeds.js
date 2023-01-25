const { Comment } = require('../models');

const commentData = [
  {
    content: 'I tried to make this Avocado Breakfast sandwich and it tasted AMAZING! I think I will add some onions next time.',
    user_id: 2,
    recipe_id: 1,
  },
  {
    content: 'This was a great recipe. I though it would be harder to make, but I was successful!',
    user_id: 2,
    recipe_id: 2,
  },
  {
    content: 'You know I thought making mousse would be better, but nope, I was wrong. It was not up to my expectations.',
    user_id: 1,
    recipe_id: 3,
  },
  {
    content: 'Mmmm! Cheesy!',
    user_id: 1,
    recipe_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;