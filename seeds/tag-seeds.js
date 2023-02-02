const { Tag } = require('../models');

const tagData = [
    {
        tag: 'Breakfast',
        tag_image:
            'https://images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg',
    },
    {
        tag: 'Lunch',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FIIeOO9eqVoq1yry-bRaSb5E3p_c%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FA1363-photo-content-1.jpg&w=1024&q=90',
    },
    {
        tag: 'Dinner',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2F253hz3CrY4bRYgmypEgCQYp8w7U%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FA1271-photo-content-_0.jpg&w=1024&q=90',
    },
    {
        tag: 'Dessert',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FmBLkW0LmA0mugGteZf-qod_IJ5U%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FrecipeImages%2Fcreamy-raspberry-quark-final.jpg&w=1024&q=90',
    },
    {
        tag: 'Snack',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FtBxdv50NExchALWApNOQeKD5iM4%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FA768-photo-final.jpg&w=1024&q=90',
    },
    {
        tag: 'Vegan',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FwRnIaaRPLwYFbyVnYjNRZiN8dhM%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FrecipeImages%2FR837-photo-final-4x3.jpg&w=1024&q=90',
    },
    {
        tag: 'Bakery',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FCydkcQbmRcaIE845q5s1nLqv488%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FR2763-final-photo-_0.jpg&w=1024&q=90',
    },
    {
        tag: 'Fast Food',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FUM6hbIDxiXKRzFnMHz0lCCaHOmg%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FcommunityImages%2F70a42838e3426ebc90f5dda54d8ee447_f558efc5-1643-4d93-8c0a-5c76cc590012.jpeg&w=1024&q=90',
    },
    {
        tag: 'Vegetarian',
        tag_image:
            'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2Fz0wUB9hWLl_8fyG2FI8gjYK60NU%3D%2F864x648%2Ffilters%3Aquality(90)%2Fimages.kitchenstories.io%2FrecipeImages%2F15_09_HeartyVegetarianStew_titlePicture.jpg&w=1024&q=90',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
