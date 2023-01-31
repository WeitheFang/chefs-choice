const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const imageUploadRoutes = require('./uploadImage');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/uploadImage', imageUploadRoutes);

module.exports = router;
