const { User } = require('../models');

const userData = [
    {
        user_name: 'maria',
        email: 'chefmaria@gmail.com',
        password:
            '$2a$10$rcBlxD8d.4RpdO5HqYiuPujJ7GD2nYovWqIvojXCTYiXtaUvXJTEC', //Ilovefood1234!,
        is_Admin: true,
    },
    {
        user_name: 'jackthefoody',
        email: 'pineapplesonpizza@gmail.com',
        password:
            '$2a$10$/3fIchxxDSxuq5FJuO5VO.yFJomZYk8/9DJIvGgUit2P.0bz/.IIO', //@Burgers2424
        is_Admin: false,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
