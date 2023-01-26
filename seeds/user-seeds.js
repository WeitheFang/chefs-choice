const { User } = require('../models');

const userData = [
  {
    user_name: 'maria',
    email: 'chefmaria@gmail.com',
    password: 'Ilovefood1234!',
    is_Admin: true,
  },
  {
    user_name: 'jackthefoody',
    email: 'pineapplesonpizza@gmail.com',
    password: '@Burgers2424',
    is_Admin: false,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;